import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

//  axios config for requests
const config: AxiosRequestConfig = {
  baseURL: 'https://api.openweathermap.org/data/2.5/',
}

// create requests axios with config
const instance: AxiosInstance = axios.create(config)

// weather api

export const weatherAPI = {
  // get data of weather for the day

  async getDayWeather(city: string) {
    const response = await instance.get(`weather?q=${city}&units=metric&appid=5712b8887160185aaa20b84fcd1da1c4`)
    return response.data
  },

  // get data of weather for the week

  async getWeekWeather(city: string) {
    const response = await instance.get(`forecast?q=${city}&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4`)
    return response.data
  },
}
