// 圖: 1 ~ 42, 留底用
var WeatherIcons = [
  {
    Wx: "01",
    C: "晴天",
    E: "CLEAR",
  },
  {
    Wx: "02",
    C: "晴時多雲",
    E: "MOSTLY CLEAR",
  },
  {
    Wx: "03",
    C: "多雲時晴",
    E: "PARTLY CLEAR",
  },
  {
    Wx: "04",
    C: "多雲",
    E: "PARTLY CLOUDY",
  },
  {
    Wx: "05",
    C: "多雲時陰",
    E: "MOSTLY CLOUDY",
  },
  {
    Wx: "06",
    C: "陰時多雲",
    E: "MOSTLY CLOUDY",
  },
  {
    Wx: "07",
    C: "陰天",
    E: "CLOUDY",
  },
  {
    Wx: "08",
    C: "多雲陣雨",
    E: "PARTLY CLOUDY WITH SHOWERS",
  },
  {
    Wx: "08",
    C: "多雲短暫雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL RAIN",
  },
  {
    Wx: "08",
    C: "多雲短暫陣雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "08",
    C: "午後短暫陣雨",
    E: "OCCASIONAL AFTERNOON SHOWERS",
  },
  {
    Wx: "08",
    C: "短暫陣雨",
    E: "OCCASIONAL SHOWERS",
  },
  {
    Wx: "08",
    C: "多雲時晴短暫陣雨",
    E: "PARTLY CLEAR WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "08",
    C: "多雲時晴短暫雨",
    E: "PARTLY CLEAR WITH OCCASIONAL RAIN",
  },
  {
    Wx: "08",
    C: "晴時多雲短暫陣雨",
    E: "MOSTLY CLEAR WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "08",
    C: "晴短暫陣雨",
    E: "CLEAR WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "08",
    C: "短暫雨",
    E: "OCCASIONAL RAIN",
  },
  {
    Wx: "09",
    C: "多雲時陰短暫雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN",
  },
  {
    Wx: "09",
    C: "多雲時陰短暫陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "10",
    C: "陰時多雲短暫雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN",
  },
  {
    Wx: "10",
    C: "陰時多雲短暫陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "11",
    C: "雨天",
    E: "RAINY",
  },
  {
    Wx: "11",
    C: "晴午後陰短暫雨",
    E: "CLEAR BECOMING CLOUDY WITH OCCASIONAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "11",
    C: "晴午後陰短暫陣雨",
    E: "CLEAR BECOMING CLOUDY WITH OCCASIONAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "11",
    C: "陰短暫雨",
    E: "CLOUDY WITH OCCASIONAL RAIN",
  },
  {
    Wx: "11",
    C: "陰短暫陣雨",
    E: "CLOUDY WITH OCCASIONAL SHOWERS",
  },
  {
    Wx: "11",
    C: "陰午後短暫陣雨",
    E: "CLOUDY WITH OCCASIONAL AFTERNOON SHOWERS",
  },
  {
    Wx: "12",
    C: "多雲時陰有雨",
    E: "MOSTLY CLOUDY WITH RAIN",
  },
  {
    Wx: "12",
    C: "多雲時陰陣雨",
    E: "MOSTLY CLOUDY WITH SHOWERS",
  },
  {
    Wx: "12",
    C: "晴時多雲陣雨",
    E: "MOSTLY CLEAR WITH SHOWERS",
  },
  {
    Wx: "12",
    C: "多雲時晴陣雨",
    E: "PARTLY CLEAR WITH SHOWERS",
  },
  {
    Wx: "13",
    C: "陰時多雲有雨",
    E: "MOSTLY CLOUDY WITH RAIN",
  },
  {
    Wx: "13",
    C: "陰時多雲有陣雨",
    E: "MOSTLY CLOUDY WITH SHOWERS",
  },
  {
    Wx: "13",
    C: "陰時多雲陣雨",
    E: "MOSTLY CLOUDY WITH SHOWERS",
  },
  {
    Wx: "14",
    C: "陰有雨",
    E: "RAINY",
  },
  {
    Wx: "14",
    C: "陰有陣雨",
    E: "CLOUDY WITH SHOWERS",
  },
  {
    Wx: "14",
    C: "陰雨",
    E: "RAINY",
  },
  {
    Wx: "14",
    C: "陰陣雨",
    E: "CLOUDY WITH SHOWERS",
  },
  {
    Wx: "14",
    C: "陣雨",
    E: "SHOWERS",
  },
  {
    Wx: "14",
    C: "午後陣雨",
    E: "AFTERNOON SHOWERS",
  },
  {
    Wx: "14",
    C: "有雨",
    E: "RAIN",
  },
  {
    Wx: "15",
    C: "多雲陣雨或雷雨",
    E: "PARTLY CLOUDY WITH SHOWERS OR THUNDERSHOWERS",
  },
  {
    Wx: "15",
    C: "多雲短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSHOWERS",
  },
  {
    Wx: "15",
    C: "多雲短暫雷陣雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL THUNDERSHOWERS",
  },
  {
    Wx: "15",
    C: "多雲雷陣雨",
    E: "PARTLY CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "15",
    C: "短暫陣雨或雷雨後多雲",
    E: "CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "15",
    C: "短暫雷陣雨後多雲",
    E: "CLOUDY WITH OCCASIONAL THUNDERSHOWERS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "15",
    C: "短暫陣雨或雷雨",
    E: "OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "15",
    C: "晴時多雲短暫陣雨或雷雨",
    E: "MOSTLY CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "15",
    C: "晴短暫陣雨或雷雨",
    E: "CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "15",
    C: "多雲時晴短暫陣雨或雷雨",
    E: "PARTLY CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "15",
    C: "午後短暫雷陣雨",
    E: "OCCASIONAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "16",
    C: "多雲時陰陣雨或雷雨",
    E: "PARTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "16",
    C: "多雲時陰短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "16",
    C: "多雲時陰短暫雷陣雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL THUNDERSHOWERS",
  },
  {
    Wx: "16",
    C: "多雲時陰雷陣雨",
    E: "PARTLY CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "16",
    C: "晴陣雨或雷雨",
    E: "CLEAR WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "16",
    C: "晴時多雲陣雨或雷雨",
    E: "MOSTLY CLEAR WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "16",
    C: "多雲時晴陣雨或雷雨",
    E: "PARTLY CLEAR WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "17",
    C: "陰時多雲有雷陣雨",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "17",
    C: "陰時多雲陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "17",
    C: "陰時多雲短暫陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "17",
    C: "陰時多雲短暫雷陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL THUNDERSHOWERS",
  },
  {
    Wx: "17",
    C: "陰時多雲雷陣雨",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "18",
    C: "陰有陣雨或雷雨",
    E: "CLOUDY WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "18",
    C: "陰有雷陣雨",
    E: "CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "18",
    C: "陰陣雨或雷雨",
    E: "CLOUDY WITH SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "18",
    C: "陰雷陣雨",
    E: "CLOUDY WITH THUNDERSHOWERS",
  },
  {
    Wx: "18",
    C: "晴午後陰短暫陣雨或雷雨",
    E: "CLEAR BECOMING CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "18",
    C: "晴午後陰短暫雷陣雨",
    E: "CLEAR BECOMING CLOUDY WITH OCCASIONAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "18",
    C: "陰短暫陣雨或雷雨",
    E: "CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "18",
    C: "陰短暫雷陣雨",
    E: "CLOUDY WITH OCCASIONAL THUNDERSHOWERS",
  },
  {
    Wx: "18",
    C: "雷雨",
    E: "THUNDERSTORMS",
  },
  {
    Wx: "18",
    C: "陣雨或雷雨後多雲",
    E: "CLOUDY WITH SHOWERS OR THUNDERSTORMS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "陰陣雨或雷雨後多雲",
    E: "CLOUDY WITH SHOWERS OR THUNDERSTORMS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "陰短暫陣雨或雷雨後多雲",
    E: "CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "陰短暫雷陣雨後多雲",
    E: "CLOUDY WITH OCCASIONAL THUNDERSHOWERS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "陰雷陣雨後多雲",
    E: "CLOUDY WITH THUNDERSHOWERS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "雷陣雨後多雲",
    E: "CLOUDY WITH THUNDERSHOWERS BECOMING PARTLY CLOUDY",
  },
  {
    Wx: "18",
    C: "陣雨或雷雨",
    E: "SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "18",
    C: "雷陣雨",
    E: "THUNDERSHOWERS",
  },
  {
    Wx: "18",
    C: "午後雷陣雨",
    E: "AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "19",
    C: "晴午後多雲局部雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後多雲局部陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後多雲局部短暫雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後多雲局部短暫陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後多雲短暫雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH OCCASIONAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後多雲短暫陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH OCCASIONAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "19",
    C: "晴午後局部雨",
    E: "CLEAR WITH LOCAL AFTERNOON RAIN",
  },
  {
    Wx: "19",
    C: "晴午後局部陣雨",
    E: "CLEAR WITH LOCAL AFTERNOON RAIN",
  },
  {
    Wx: "19",
    C: "晴午後局部短暫雨",
    E: "CLEAR WITH OCCASIONAL AFTERNOON RAIN",
  },
  {
    Wx: "19",
    C: "晴午後局部短暫陣雨",
    E: "CLEAR WITH OCCASIONAL AFTERNOON RAIN",
  },
  {
    Wx: "19",
    C: "晴午後陣雨",
    E: "CLEAR WITH AFTERNOON SHOWERS",
  },
  {
    Wx: "19",
    C: "晴午後短暫雨",
    E: "CLEAR WITH OCCASIONAL AFTERNOON RAIN",
  },
  {
    Wx: "19",
    C: "晴午後短暫陣雨",
    E: "CLEAR WITH OCCASIONAL AFTERNOON SHOWERS",
  },
  {
    Wx: "19",
    C: "晴時多雲午後短暫陣雨",
    E: "MOSTLY CLEAR WITH OCCASIONAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "20",
    C: "多雲午後局部雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON RAIN",
  },
  {
    Wx: "20",
    C: "多雲午後局部陣雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON SHOWERS",
  },
  {
    Wx: "20",
    C: "多雲午後局部短暫雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON RAIN",
  },
  {
    Wx: "20",
    C: "多雲午後局部短暫陣雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON SHOWERS",
  },
  {
    Wx: "20",
    C: "多雲午後陣雨",
    E: "PARTLY CLOUDY WITH AFTERNOON SHOWERS",
  },
  {
    Wx: "20",
    C: "多雲午後短暫雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL AFTERNOON RAIN",
  },
  {
    Wx: "20",
    C: "多雲午後短暫陣雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL AFTERNOON SHOWERS",
  },
  {
    Wx: "20",
    C: "多雲時陰午後短暫陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "20",
    C: "陰時多雲午後短暫陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "20",
    C: "多雲時晴午後短暫陣雨",
    E: "PARTLY CLEAR WITH OCCASIONAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲陣雨或雷雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲雷陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後陣雨或雷雨",
    E: "CLEAR WITH AFTERNOON SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "21",
    C: "晴午後雷陣雨",
    E: "CLEAR WITH AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴午後多雲局部陣雨或雷雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲局部短暫陣雨或雷雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲局部短暫雷陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲局部雷陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲短暫陣雨或雷雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後多雲短暫雷陣雨",
    E: "CLEAR BECOMING PARTLY CLOUDY WITH OCCASIONAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "21",
    C: "晴午後局部短暫雷陣雨",
    E: "CLEAR WITH LOCAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴午後局部雷陣雨",
    E: "CLEAR WITH LOCAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴午後短暫雷陣雨",
    E: "CLEAR WITH OCCASIONAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴雷陣雨",
    E: "CLEAR WITH THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴時多雲雷陣雨",
    E: "MOSTLY CLEAR WITH THUNDERSHOWERS",
  },
  {
    Wx: "21",
    C: "晴時多雲午後短暫雷陣雨",
    E: "MOSTLY CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "22",
    C: "多雲午後局部陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "22",
    C: "多雲午後局部短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "22",
    C: "多雲午後局部短暫雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "22",
    C: "多雲午後局部雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "22",
    C: "多雲午後陣雨或雷雨",
    E: "PARTLY CLOUDY WITH AFTERNOON THUNDERSTORMS OR SHOWERS",
  },
  {
    Wx: "22",
    C: "多雲午後短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL AFTERNOON SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "22",
    C: "多雲午後短暫雷陣雨",
    E: "PARTLY CLOUDY WITH OCCASIONAL AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "22",
    C: "多雲午後雷陣雨",
    E: "PARTLY CLOUDY WITH AFTERNOON THUNDERSHOWERS",
  },
  {
    Wx: "22",
    C: "多雲時晴雷陣雨",
    E: "PARTLY CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "22",
    C: "多雲時晴午後短暫雷陣雨",
    E: "PARTLY CLEAR WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "22",
    C: "多雲時陰午後短暫雷陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "22",
    C: "陰時多雲午後短暫雷陣雨",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "22",
    C: "陰午後短暫雷陣雨",
    E: "CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "23",
    C: "多雲局部陣雨或雪",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲時陰有雨或雪",
    E: "MOSTLY CLOUDY WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲時陰短暫雨或雪",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲短暫雨或雪",
    E: "PARTLY CLOUDY WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "陰有雨或雪",
    E: "CLOUDY WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "陰時多雲有雨或雪",
    E: "MOSTLY CLOUDY WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "陰時多雲短暫雨或雪",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "陰短暫雨或雪",
    E: "CLOUDY WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲時陰有雪",
    E: "MOSTLY CLOUDY WITH SNOW",
  },
  {
    Wx: "23",
    C: "多雲時陰短暫雪",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "多雲短暫雪",
    E: "PARTLY CLOUDY WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "陰有雪",
    E: "CLOUDY WITH SNOW",
  },
  {
    Wx: "23",
    C: "陰時多雲有雪",
    E: "MOSTLY CLOUDY WITH SNOW",
  },
  {
    Wx: "23",
    C: "陰時多雲短暫雪",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "陰短暫雪",
    E: "CLOUDY WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "有雨或雪",
    E: "RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "有雨或短暫雪",
    E: "RAIN OR OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "陰有雨或短暫雪",
    E: "CLOUDY WITH RAIN OR OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "陰時多雲有雨或短暫雪",
    E: "MOSTLY CLOUDY WITH RAIN OR OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "多雲時陰有雨或短暫雪",
    E: "MOSTLY CLOUDY WITH RAIN OR OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "多雲有雨或短暫雪",
    E: "PARTLY CLOUDY WITH RAIN OR OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "多雲有雨或雪",
    E: "PARTLY CLOUDY WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲時晴有雨或雪",
    E: "PARTLY CLEAR WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "晴時多雲有雨或雪",
    E: "MOSTLY CLEAR WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "晴有雨或雪",
    E: "CLEAR WITH RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "短暫雨或雪",
    E: "OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "多雲時晴短暫雨或雪",
    E: "PARTLY CLEAR WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "晴時多雲短暫雨或雪",
    E: "MOSTLY CLEAR WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "晴短暫雨或雪",
    E: "CLEAR WITH OCCASIONAL RAIN OR SNOW",
  },
  {
    Wx: "23",
    C: "有雪",
    E: "SNOW",
  },
  {
    Wx: "23",
    C: "多雲有雪",
    E: "PARTLY CLOUDY WITH SNOW",
  },
  {
    Wx: "23",
    C: "多雲時晴有雪",
    E: "PARTLY CLEAR WITH SNOW",
  },
  {
    Wx: "23",
    C: "晴時多雲有雪",
    E: "MOSTLY CLEAR WITH SNOW",
  },
  {
    Wx: "23",
    C: "晴有雪",
    E: "CLEAR WITH SNOW",
  },
  {
    Wx: "23",
    C: "短暫雪",
    E: "OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "多雲時晴短暫雪",
    E: "PARTLY CLEAR WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "晴時多雲短暫雪",
    E: "MOSTLY CLEAR WITH OCCASIONAL SNOW",
  },
  {
    Wx: "23",
    C: "晴短暫雪",
    E: "CLEAR WITH OCCASIONAL SNOW",
  },
  {
    Wx: "24",
    C: "晴有霧",
    E: "CLEAR WITH FOG",
  },
  {
    Wx: "24",
    C: "晴晨霧",
    E: "CLEAR WITH MORNING FOG",
  },
  {
    Wx: "25",
    C: "晴時多雲有霧",
    E: "MOSTLY CLEAR WITH FOG",
  },
  {
    Wx: "25",
    C: "晴時多雲晨霧",
    E: "MOSTLY CLEAR WITH MORNING FOG",
  },
  {
    Wx: "26",
    C: "多雲時晴有霧",
    E: "PARTLY CLEAR WITH FOG",
  },
  {
    Wx: "26",
    C: "多雲時晴晨霧",
    E: "PARTLY CLOUDY WITH MORNING FOG",
  },
  {
    Wx: "27",
    C: "多雲有霧",
    E: "PARTLY CLOUDY WITH FOG",
  },
  {
    Wx: "27",
    C: "多雲晨霧",
    E: "PARTLY CLOUDY WITH MORNING FOG",
  },
  {
    Wx: "27",
    C: "有霧",
    E: "WITH FOG",
  },
  {
    Wx: "27",
    C: "晨霧",
    E: "MORNING FOG",
  },
  {
    Wx: "28",
    C: "陰有霧",
    E: "CLOUDY WITH FOG",
  },
  {
    Wx: "28",
    C: "陰晨霧",
    E: "CLOUDY WITH MORNING FOG",
  },
  {
    Wx: "28",
    C: "多雲時陰有霧",
    E: "MOSTLY CLOUDY WITH FOG",
  },
  {
    Wx: "28",
    C: "多雲時陰晨霧",
    E: "MOSTLY CLOUDY WITH MORNING FOG",
  },
  {
    Wx: "28",
    C: "陰時多雲有霧",
    E: "MOSTLY CLOUDY WITH FOG",
  },
  {
    Wx: "28",
    C: "陰時多雲晨霧",
    E: "MOSTLY CLOUDY WITH MORNING FOG",
  },
  {
    Wx: "29",
    C: "多雲局部雨",
    E: "PARTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "29",
    C: "多雲局部陣雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "29",
    C: "多雲局部短暫雨",
    E: "PARTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "29",
    C: "多雲局部短暫陣雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "多雲時陰局部雨",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "多雲時陰局部陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "多雲時陰局部短暫雨",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "多雲時陰局部短暫陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "晴午後陰局部雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "30",
    C: "晴午後陰局部陣雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "30",
    C: "晴午後陰局部短暫雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL RAIN IN THE AFTERNOON",
  },
  {
    Wx: "30",
    C: "晴午後陰局部短暫陣雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL SHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "30",
    C: "陰局部雨",
    E: "CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "陰局部陣雨",
    E: "CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "陰局部短暫雨",
    E: "CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "陰局部短暫陣雨",
    E: "CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "陰時多雲局部雨",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "陰時多雲局部陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "30",
    C: "陰時多雲局部短暫雨",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN",
  },
  {
    Wx: "30",
    C: "陰時多雲局部短暫陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS",
  },
  {
    Wx: "31",
    C: "多雲有霧有局部雨",
    E: "PARTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "31",
    C: "多雲有霧有局部陣雨",
    E: "PARTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "31",
    C: "多雲有霧有局部短暫雨",
    E: "PARTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "31",
    C: "多雲有霧有局部短暫陣雨",
    E: "PARTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "31",
    C: "多雲有霧有陣雨",
    E: "PARTLY CLOUDY WITH FOG AND RAIN",
  },
  {
    Wx: "31",
    C: "多雲有霧有短暫雨",
    E: "PARTLY CLOUDY WITH FOG AND OCCASIONAL RAIN",
  },
  {
    Wx: "31",
    C: "多雲有霧有短暫陣雨",
    E: "PARTLY CLOUDY WITH FOG AND OCCASIONAL SHOWERS",
  },
  {
    Wx: "31",
    C: "多雲局部雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "31",
    C: "多雲局部雨晨霧",
    E: "PARTLY CLOUDY WITH LOCAL RAIN AND FOG IN THE MORNING",
  },
  {
    Wx: "31",
    C: "多雲局部陣雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "31",
    C: "多雲局部陣雨晨霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "31",
    C: "多雲局部短暫雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "31",
    C: "多雲局部短暫雨晨霧",
    E: "PARTLY CLOUDY WITH LOCAL RAIN AND MORNING FOG",
  },
  {
    Wx: "31",
    C: "多雲局部短暫陣雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "31",
    C: "多雲局部短暫陣雨晨霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "31",
    C: "多雲陣雨有霧",
    E: "PARTLY CLOUDY WITH SHOWERS AND FOG",
  },
  {
    Wx: "31",
    C: "多雲短暫雨有霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL RAIN AND FOG",
  },
  {
    Wx: "31",
    C: "多雲短暫雨晨霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL RAIN AND FOG IN THE MORNING",
  },
  {
    Wx: "31",
    C: "多雲短暫陣雨有霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS AND FOG",
  },
  {
    Wx: "31",
    C: "多雲短暫陣雨晨霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "31",
    C: "有霧有短暫雨",
    E: "FOG AND OCCASIONAL RAIN",
  },
  {
    Wx: "31",
    C: "有霧有短暫陣雨",
    E: "FOG AND OCCASIONAL SHOWERS",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有局部雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有局部陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有局部短暫雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有局部短暫陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND SHOWERS",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有短暫雨",
    E: "MOSTLY CLOUDY WITH FOG AND OCCASIONAL RAIN",
  },
  {
    Wx: "32",
    C: "多雲時陰有霧有短暫陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND OCCASIONAL SHOWERS",
  },
  {
    Wx: "32",
    C: "多雲時陰局部雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰局部陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰局部短暫雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰局部短暫陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰陣雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰短暫雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰短暫雨晨霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN AND FOG IN THE MORNING",
  },
  {
    Wx: "32",
    C: "多雲時陰短暫陣雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "多雲時陰短暫陣雨晨霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "32",
    C: "陰有霧有陣雨",
    E: "CLOUDY WITH FOG AND SHOWERS",
  },
  {
    Wx: "32",
    C: "陰局部雨有霧",
    E: "CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "陰局部陣雨有霧",
    E: "CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰局部短暫陣雨有霧",
    E: "CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有局部雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有局部陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有局部短暫雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL RAIN",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有局部短暫陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND LOCAL SHOWERS",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND SHOWERS",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有短暫雨",
    E: "MOSTLY CLOUDY WITH FOG AND OCCASIONAL RAIN",
  },
  {
    Wx: "32",
    C: "陰時多雲有霧有短暫陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND OCCASIONAL SHOWERS",
  },
  {
    Wx: "32",
    C: "陰時多雲局部雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲局部陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲局部短暫雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲局部短暫陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲陣雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲短暫雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲短暫雨晨霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL RAIN AND FOG IN THE MORNING",
  },
  {
    Wx: "32",
    C: "陰時多雲短暫陣雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰時多雲短暫陣雨晨霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "32",
    C: "陰陣雨有霧",
    E: "CLOUDY WITH SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰短暫雨有霧",
    E: "CLOUDY WITH OCCASIONAL RAIN AND FOG",
  },
  {
    Wx: "32",
    C: "陰短暫雨晨霧",
    E: "CLOUDY WITH OCCASIONAL RAIN AND MORNING FOG",
  },
  {
    Wx: "32",
    C: "陰短暫陣雨有霧",
    E: "CLOUDY WITH OCCASIONAL SHOWERS AND FOG",
  },
  {
    Wx: "32",
    C: "陰短暫陣雨晨霧",
    E: "CLOUDY WITH OCCASIONAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "33",
    C: "多雲局部陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSHOWERS",
  },
  {
    Wx: "33",
    C: "多雲局部短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSHOWERS",
  },
  {
    Wx: "33",
    C: "多雲局部短暫雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "33",
    C: "多雲局部雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "多雲時陰局部陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "多雲時陰局部短暫陣雨或雷雨",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "34",
    C: "多雲時陰局部短暫雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "多雲時陰局部雷陣雨",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "晴午後陰局部陣雨或雷雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "34",
    C: "晴午後陰局部短暫陣雨或雷雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS IN THE AFTERNOON",
  },
  {
    Wx: "34",
    C: "晴午後陰局部短暫雷陣雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "34",
    C: "晴午後陰局部雷陣雨",
    E: "CLEAR BECOMING CLOUDY WITH LOCAL THUNDERSHOWERS IN THE AFTERNOON",
  },
  {
    Wx: "34",
    C: "陰局部陣雨或雷雨",
    E: "CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "34",
    C: "陰局部短暫陣雨或雷雨",
    E: "CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "34",
    C: "陰局部短暫雷陣雨",
    E: "CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "陰局部雷陣雨",
    E: "CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "陰時多雲局部陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "34",
    C: "陰時多雲局部短暫陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "34",
    C: "陰時多雲局部短暫雷陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "34",
    C: "陰時多雲局部雷陣雨",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSHOWERS",
  },
  {
    Wx: "35",
    C: "多雲有陣雨或雷雨有霧",
    E: "PARTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲有雷陣雨有霧",
    E: "PARTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲有霧有陣雨或雷雨",
    E: "PARTLY CLOUDY WITH FOG AND SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "35",
    C: "多雲有霧有雷陣雨",
    E: "PARTLY CLOUDY WITH FOG AND THUNDERSHOWERS",
  },
  {
    Wx: "35",
    C: "多雲局部陣雨或雷雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲局部短暫陣雨或雷雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲局部短暫雷陣雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲局部雷陣雨有霧",
    E: "PARTLY CLOUDY WITH LOCAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲陣雨或雷雨有霧",
    E: "PARTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲短暫陣雨或雷雨有霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲短暫雷陣雨有霧",
    E: "PARTLY CLOUDY WITH OCCASIONAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲雷陣雨有霧",
    E: "PARTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "35",
    C: "多雲時晴短暫陣雨或雷雨有霧",
    E: "PARTLY CLEAR OCCASIONAL SHOWERS OR THUNDERSTORMS WITH FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰有陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰有雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰有霧有陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH FOG AND SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "36",
    C: "多雲時陰有霧有雷陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND THUNDERSHOWERS",
  },
  {
    Wx: "36",
    C: "多雲時陰局部陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰局部短暫陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰局部短暫雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰局部雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰短暫陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰短暫雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "多雲時陰雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰局部陣雨或雷雨有霧",
    E: "CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰局部短暫陣雨或雷雨有霧",
    E: "CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰局部短暫雷陣雨有霧",
    E: "CLOUDY WITH LOCAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰局部雷陣雨有霧",
    E: "CLOUDY WITH LOCAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲有陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲有雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲有霧有陣雨或雷雨",
    E: "MOSTLY CLOUDY WITH FOG AND SHOWERS OR THUNDERSTORMS",
  },
  {
    Wx: "36",
    C: "陰時多雲有霧有雷陣雨",
    E: "MOSTLY CLOUDY WITH FOG AND THUNDERSHOWERS",
  },
  {
    Wx: "36",
    C: "陰時多雲局部陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲局部短暫陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲局部短暫雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲局部雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH LOCAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲短暫陣雨或雷雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲短暫雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH OCCASIONAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰時多雲雷陣雨有霧",
    E: "MOSTLY CLOUDY WITH THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "陰短暫陣雨或雷雨有霧",
    E: "CLOUDY WITH OCCASIONAL SHOWERS OR THUNDERSTORMS AND FOG",
  },
  {
    Wx: "36",
    C: "陰短暫雷陣雨有霧",
    E: "CLOUDY WITH OCCASIONAL THUNDERSHOWERS AND FOG",
  },
  {
    Wx: "36",
    C: "雷陣雨有霧",
    E: "THUNDERSHOWERS WITH FOG",
  },
  {
    Wx: "37",
    C: "多雲局部雨或雪有霧",
    E: "PARTLY CLOUDY WITH LOCAL RAIN OR SNOW AND FOG",
  },
  {
    Wx: "37",
    C: "多雲時陰局部雨或雪有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN OR SNOW AND FOG",
  },
  {
    Wx: "37",
    C: "陰時多雲局部雨或雪有霧",
    E: "MOSTLY CLOUDY WITH LOCAL RAIN OR SNOW AND FOG",
  },
  {
    Wx: "37",
    C: "陰局部雨或雪有霧",
    E: "CLOUDY WITH LOCAL RAIN OR SNOW AND FOG",
  },
  {
    Wx: "37",
    C: "短暫雨或雪有霧",
    E: "OCCASIONAL WITH RAIN OR SNOW AND FOG",
  },
  {
    Wx: "37",
    C: "有雨或雪有霧",
    E: "RAIN OR SNOW WITH FOG",
  },
  {
    Wx: "38",
    C: "短暫陣雨有霧",
    E: "OCCASIONAL SHOWERS WITH FOG",
  },
  {
    Wx: "38",
    C: "短暫陣雨晨霧",
    E: "OCCASIONAL SHOWERS AND MORNING FOG",
  },
  {
    Wx: "38",
    C: "短暫雨有霧",
    E: "OCCASIONAL RAIN WITH FOG",
  },
  {
    Wx: "38",
    C: "短暫雨晨霧",
    E: "OCCASIONAL RAIN WITH MORNING FOG",
  },
  {
    Wx: "39",
    C: "有雨有霧",
    E: "RAIN WITH FOG",
  },
  {
    Wx: "39",
    C: "陣雨有霧",
    E: "SHOWERS WITH FOG",
  },
  {
    Wx: "41",
    C: "短暫陣雨或雷雨有霧",
    E: "OCCASIONAL SHOWERS OR THUNDERSTORMS WITH FOG",
  },
  {
    Wx: "41",
    C: "陣雨或雷雨有霧",
    E: "SHOWERS OR THUNDERSTORMS WITH FOG",
  },
  {
    Wx: "42",
    C: "下雪",
    E: "SNOW",
  },
  {
    Wx: "42",
    C: "積冰",
    E: "ICE",
  },
  {
    Wx: "42",
    C: "暴風雪",
    E: "SNOW FLURRIES",
  },
];
