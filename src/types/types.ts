/* current (day) */

// weather data object for the day

export interface IDayWeatherData {
  name: string
  wind: {
    speed: number
    deg: number
    gust: number
  }
  main: {
    temp: number
    temp_max: number
    temp_min: number
    feels_like: number
    humidity: number
  }
  clouds: {
    all: number
  }
}

/* forecast  */

//weather forecast data by day

export interface IdailyForecastData {
  clouds: {
    all: number
  }
  dt: number
  dt_txt: string
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
  }
  pop: number
  sys: {
    pod: string
  }
  visibility: number
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  wind: {
    speed: number
    deg: number
    gust: number
  }
}

// whole weather forecast data object

export interface IForecastData {
  city: {
    coord: {
      lat: number
      lon: number
    }
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  cnt: number
  cod: string
  list: IdailyForecastData[]
}

/* dashboard  */

export interface ICardStatistic {
  title: string
  icon: React.ReactNode
  firstTitle: string
  firstData: number
  secondTitle: string | null
  secondData: number
  thirdTitle: string | null
  thirdData: number
  fourthTitle?: string | null
  fourthData?: number
  wind?: boolean
  temperature?: boolean
}

export interface IStatisticData {
  title: string | null
  value: number | null
  suffix: string
}

export interface ICardProgress {
  title: string
  icon: React.ReactNode
  data: number
}
