import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
  headers: { Accept: 'application/json' },
})

export const weatherAPI = {
  getDayWeather(city) {
    return instance.get(`weather?q=${city}&appid=5712b8887160185aaa20b84fcd1da1c4`)
  },
  getWeekWeather(city) {
    return instance.get(`forecast?q=${city}&lang=ru&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4`)
  },
}
