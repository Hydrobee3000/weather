import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'https://api.openweathermap.org/data/2.5/',
}
const instance: AxiosInstance = axios.create(config)

export const weatherAPI = {
  getDayWeather(city: string): any {
    return instance.get(`weather?q=${city}&units=metric&appid=5712b8887160185aaa20b84fcd1da1c4`)
  },
  getWeekWeather(city: string): any {
    return instance.get(`forecast?q=${city}&lang=ru&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4`)
  },
}
