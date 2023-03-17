export interface CurrencyState {
  currencies: object[]
  rateCurrencies: null | object
  baseCurrency: null | string
  toCurrency: string
  amount: null | number
  result: null | number
  isFetching: boolean
}

/* current (day) */

// weather data object for the day

export type IDayWeatherData = {
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

type WeatherList = {
  [index: number]: {
    id: number
    main: string
    description: string
    icon: string
  }
}

export type ForecastDataList = [
  {
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
    weather: WeatherList
    wind: {
      speed: number
      deg: number
      gust: number
    }
  }
]

// weather forecast data object

export type ForecastData = {
  city: {
    coord: [{ lat: number }, { lon: number }]
    counrty: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  cnt: number
  cod: string
  list: ForecastDataList
  message: number
}
