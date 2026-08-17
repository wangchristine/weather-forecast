<script setup>
import { computed, onMounted, ref } from "vue";
import { geoMercator, geoPath } from "d3-geo";
import cloud1 from "./assets/img/cloud/cloud1.png";
import cloud2 from "./assets/img/cloud/cloud2.png";
import cloud3 from "./assets/img/cloud/cloud3.png";
import country from "../country.json";
// import localWeather from "../temp.json";

const dayWeatherImages = import.meta.glob("./assets/img/day/*.svg", {
  eager: true,
  import: "default",
  query: "?url",
});
const nightWeatherImages = import.meta.glob("./assets/img/night/*.svg", {
  eager: true,
  import: "default",
  query: "?url",
});

const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
const apiToken = import.meta.env.VITE_WEATHER_API_TOKEN;

// const weather = ref(localWeather);
const weather = ref(null);
const isLoading = ref(false);
const errorMessage = ref("");
const lastUpdated = ref(new Date());
const hoveredCity = ref(null);

const offshoreCountyNames = new Set([
  "Penghu County",
  "Kinmen County",
  "Lienchiang County",
]);
const offshoreMapGroups = [
  { key: "matsu", label: "馬祖", countyName: "Lienchiang County" },
  { key: "kinmen", label: "金門", countyName: "Kinmen County" },
  { key: "penghu", label: "澎湖", countyName: "Penghu County" },
];

const cities = computed(() => {
  const locations = weather.value?.records?.location ?? [];
  const byName = new Map(
    locations.map((location) => [location.locationName, location]),
  );
  return country.features.map((feature) => ({
    ...feature,
    properties: {
      ...feature.properties,
      weather: byName.get(feature.properties.COUNTYNAME)?.weatherElement ?? [],
    },
  }));
});

const selectedCity = ref(
  cities.value.find(
    (city) => city.properties.COUNTYENG === "New Taipei City",
  ) ??
    cities.value.find((city) => city.properties.weather.length) ??
    cities.value[0],
);

const mainIslandCities = computed(() =>
  cities.value.filter(
    (city) => !offshoreCountyNames.has(city.properties.COUNTYENG),
  ),
);
const offshoreCities = computed(() =>
  cities.value.filter((city) =>
    offshoreCountyNames.has(city.properties.COUNTYENG),
  ),
);

const mainPathGenerator = geoPath(
  geoMercator()
    .center([121, 23.7])
    .scale(9000)
    .translate([400, 330]),
);
const offshoreGroups = computed(() =>
  offshoreMapGroups.map((group) => ({
    ...group,
    cities: offshoreCities.value.filter(
      (city) => city.properties.COUNTYENG === group.countyName,
    ),
  })),
);
const offshorePathGenerators = Object.fromEntries(
  offshoreMapGroups.map((group) => [
    group.key,
    geoPath(
      geoMercator().fitSize([220, 140], {
        type: "FeatureCollection",
        features: country.features.filter(
          (feature) => feature.properties.COUNTYENG === group.countyName,
        ),
      }),
    ),
  ]),
);

function offshorePath(groupKey, city) {
  return offshorePathGenerators[groupKey](city);
}

const selectedForecast = computed(
  () => selectedCity.value?.properties.weather ?? [],
);
const forecastPeriods = computed(() => selectedForecast.value[0]?.time ?? []);
const colorStops = Array.from({ length: 11 }, (_, index) => index * 10);

function weatherValue(city, elementIndex, periodIndex = 0) {
  return (
    city?.properties.weather?.[elementIndex]?.time?.[periodIndex]?.parameter
      ?.parameterName ?? "--"
  );
}

function iconUrl(city, periodIndex) {
  const period = city?.properties.weather?.[0]?.time?.[periodIndex];
  const isDay = period && new Date(period.startTime).getHours() === 6;
  const code = Number(
    city?.properties.weather?.[0]?.time?.[periodIndex]?.parameter
      ?.parameterValue,
  );
  const icon = Number.isFinite(code) ? String(code).padStart(2, "0") : "07";
  const images = isDay ? dayWeatherImages : nightWeatherImages;
  return images[`./assets/img/${isDay ? "day" : "night"}/${icon}.svg`];
}

function colorForValue(value) {
  const ratio = Math.max(
    0,
    Math.min(1, Number.isFinite(value) ? value / 100 : 0),
  );
  const start = [214, 231, 240];
  const end = [0, 93, 197];
  return `rgb(${start.map((channel, index) => Math.round(channel + (end[index] - channel) * ratio)).join(", ")})`;
}

function colorFor(city) {
  return colorForValue(Number(weatherValue(city, 1)));
}

function selectCity(city) {
  selectedCity.value = city;
}

function formatTime(value) {
  return value
    ? new Date(value).toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "--:--";
}

function formatDateTime(value) {
  return value
    ? new Date(value).toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "--";
}

function formatPeriod(period) {
  if (!period) return "預報時段";
  const start = new Date(period.startTime);
  const today = new Date();
  const startDate = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const dayDifference = Math.round(
    (startDate - todayDate) / (1000 * 60 * 60 * 24),
  );

  let dateDescription = dayDifference === 0 ? "今日" : "明日";
  let timeDescription = "時段";

  switch (start.getHours()) {
    case 0:
      timeDescription = "凌晨";
      break;
    case 6:
      timeDescription = "白天";
      break;
    case 12:
      timeDescription = "下午";
      break;
    case 18:
      if (dayDifference === 0) {
        dateDescription = "今晚";
        timeDescription = "明晨";
      } else {
        timeDescription = "晚上";
      }
      break;
  }

  return `${dateDescription}${timeDescription}`;
}

async function loadWeather() {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    if (apiUrl && apiToken) {
      const response = await fetch(
        `${apiUrl}?Authorization=${encodeURIComponent(apiToken)}`,
      );
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      weather.value = await response.json();
    }
    lastUpdated.value = new Date();
    const selectedCountyCode = selectedCity.value?.properties.COUNTYCODE;
    selectedCity.value =
      cities.value.find(
        (city) => city.properties.COUNTYCODE === selectedCountyCode,
      ) ??
      cities.value.find(
        (city) => city.properties.COUNTYENG === "New Taipei City",
      ) ??
      cities.value.find((city) => city.properties.weather.length) ??
      cities.value[0];
  } catch (error) {
    errorMessage.value = "即時資料暫時無法取得，已顯示最近一次資料。";
    console.error("Unable to load weather data:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  if (apiUrl && apiToken) loadWeather();
});
</script>

<template>
  <main class="app-shell">
    <div class="cloud-layer" aria-hidden="true">
      <img class="cloud cloud-back" :src="cloud1" alt="" />
      <img class="cloud cloud-middle" :src="cloud2" alt="" />
      <img class="cloud cloud-front" :src="cloud3" alt="" />
    </div>
    <section class="hero">
      <div>
        <p class="eyebrow">TAIWAN WEATHER · LIVE MAP</p>
        <h1>今天的天氣，<span>一眼掌握</span></h1>
        <p class="intro">互動式全台預報地圖，點選縣市查看未來 36 小時天氣。</p>
      </div>
      <div class="status-pill" :class="{ loading: isLoading }">
        <span class="status-dot"></span>
        {{
          isLoading ? "資料載入中" : `最後更新 ${formatDateTime(lastUpdated)}`
        }}
      </div>
    </section>

    <section class="dashboard-grid">
      <article class="map-card panel">
        <div class="panel-heading">
          <div>
            <p class="section-kicker">PRECIPITATION PROBABILITY</p>
            <h2>降雨機率地圖</h2>
          </div>
        </div>
        <div class="map-wrap" aria-label="台灣天氣地圖">
          <svg class="map" viewBox="0 0 800 620" role="img">
            <path
              v-for="city in mainIslandCities"
              :key="city.properties.COUNTYCODE"
              class="county"
              :class="{
                active:
                  selectedCity?.properties.COUNTYCODE ===
                  city.properties.COUNTYCODE,
              }"
              :d="mainPathGenerator(city)"
              :fill="colorFor(city)"
              @click="selectCity(city)"
              @mouseenter="hoveredCity = city"
              @mouseleave="hoveredCity = null"
            />
            <path
              v-if="hoveredCity && !offshoreCountyNames.has(hoveredCity.properties.COUNTYENG)"
              class="county hover-overlay"
              :d="mainPathGenerator(hoveredCity)"
              :fill="colorFor(hoveredCity)"
            />
            <path
              v-if="selectedCity && !offshoreCountyNames.has(selectedCity.properties.COUNTYENG)"
              class="county active selected-overlay"
              :d="mainPathGenerator(selectedCity)"
              :fill="colorFor(selectedCity)"
            />
          </svg>
          <div class="offshore-inset">
            <div v-for="group in offshoreGroups" :key="group.key" class="offshore-block">
              <p class="inset-label">{{ group.label }}</p>
              <svg class="inset-map" viewBox="0 0 220 140" role="img" :aria-label="`${group.label}地圖`">
                <path
                  v-for="city in group.cities"
                  :key="city.properties.COUNTYCODE"
                  class="county"
                  :class="{
                    active:
                      selectedCity?.properties.COUNTYCODE ===
                      city.properties.COUNTYCODE,
                  }"
                  :d="offshorePath(group.key, city)"
                  :fill="colorFor(city)"
                  @click="selectCity(city)"
                  @mouseenter="hoveredCity = city"
                  @mouseleave="hoveredCity = null"
                />
                <path
                  v-if="hoveredCity?.properties.COUNTYENG === group.countyName"
                  class="county hover-overlay"
                  :d="offshorePath(group.key, hoveredCity)"
                  :fill="colorFor(hoveredCity)"
                />
                <path
                  v-if="selectedCity?.properties.COUNTYENG === group.countyName"
                  class="county active selected-overlay"
                  :d="offshorePath(group.key, selectedCity)"
                  :fill="colorFor(selectedCity)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="legend">
          <div class="gradient-bar">
            <i
              v-for="stop in colorStops"
              :key="stop"
              :style="{ backgroundColor: colorForValue(stop) }"
            ></i>
          </div>
          <div class="legend-labels">
            <span
              v-for="stop in colorStops"
              :key="`label-${stop}`"
              :style="{
                '--legend-position': `${stop}%`,
                '--legend-row': stop % 20 === 0 ? '0' : '1.1rem',
              }"
            >{{ stop }}%</span>
          </div>
        </div>
        <p class="map-hint">點選地圖上的縣市查看詳細預報</p>
      </article>

      <aside class="detail-column">
        <article v-if="selectedCity" class="city-card panel">
          <p class="section-kicker">SELECTED LOCATION</p>
          <h2>{{ selectedCity.properties.COUNTYNAME }}</h2>
          <p class="city-summary">{{ weatherValue(selectedCity, 0) }}</p>
          <div class="current-stats">
            <div>
              <strong>{{ weatherValue(selectedCity, 2) }}°</strong
              ><span>最低溫</span>
            </div>
            <div>
              <strong>{{ weatherValue(selectedCity, 4) }}°</strong
              ><span>最高溫</span>
            </div>
            <div>
              <strong>{{ weatherValue(selectedCity, 1) }}%</strong
              ><span>降雨機率</span>
            </div>
          </div>
        </article>
        <article class="forecast-card panel">
          <div class="panel-heading">
            <div>
              <p class="section-kicker">UPCOMING FORECAST</p>
              <h2>未來預報</h2>
            </div>
          </div>
          <div
            v-if="selectedCity && forecastPeriods.length"
            class="forecast-list"
          >
            <div
              v-for="(period, index) in forecastPeriods"
              :key="period.startTime"
              class="forecast-item"
            >
              <div>
                <b>{{ formatPeriod(period) }}</b
                ><span
                  >{{ formatTime(period.startTime) }} –
                  {{ formatTime(period.endTime) }}</span
                >
              </div>
              <img :src="iconUrl(selectedCity, index)" alt="天氣圖示" />
              <div class="forecast-values">
                <b
                  >{{ weatherValue(selectedCity, 2, index) }}° /
                  {{ weatherValue(selectedCity, 4, index) }}°</b
                ><span>降雨 {{ weatherValue(selectedCity, 1, index) }}%</span>
              </div>
            </div>
          </div>
          <p v-else class="empty-state">尚無可顯示的預報資料。</p>
        </article>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </aside>
    </section>
  </main>
</template>
