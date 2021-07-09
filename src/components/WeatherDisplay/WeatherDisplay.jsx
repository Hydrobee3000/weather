import {Component} from 'react';
import './WeatherDisplay.css';
import WeekContainer from "./WeekContainer/WeekContainer";


export default class WeatherDisplay extends Component {
    state = {
        weatherData: null
    };

    componentDidMount() {
        const name = this.props.name;
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            name +
            "&appid=5712b8887160185aaa20b84fcd1da1c4";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }


    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="wrapper">
                <div className='main-info'>
                    <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                  </h1>

                <p>День недели/Дата: {new Date().toLocaleString('ru', {weekday: 'long'})} {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
                <p>Текущая температура: {(weatherData.main.temp - 273.15).toFixed(1)} °С</p>
                <p>Ошушается как: {(weatherData.main.feels_like - 273.15).toFixed(1)} °С</p>
                <p>Min t: {(weatherData.main.temp_min - 273.15).toFixed(1)} °С</p>
                <p>Max t: {(weatherData.main.temp_max - 273.15).toFixed(1)} °С</p>
                <p>Ветер: {(weatherData.wind.speed)} m/s</p>
                <p>Влажность: {(weatherData.main.humidity)}%</p>
                </div>
                <div className="daily-weather">
            <WeekContainer name={this.props.name}/>
                </div>

            </div>
        );
    }
}