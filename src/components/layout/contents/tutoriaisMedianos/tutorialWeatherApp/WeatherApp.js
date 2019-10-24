import React, {Component} from 'react';
import Form from './components/FormWeather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy, faSun, faCloudRain, faPooStorm, faSnowflake, faSmog,  faCloud} from '@fortawesome/free-solid-svg-icons'
import './styles/weather.css'

const key =  '769bb222a5c7532e8f1b0f29f22eabe2';


class Weather extends Component {
    state={
        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        celsius: undefined,
        temp_max: undefined,
        temp_min: undefined,
        description: "",
        error:false,
    };

weatherIcon = n => {
    if(n >= 200 && n <= 232 ){
        return faPooStorm;
    }else if(n >= 300 && n <= 321){
        return faCloudRain;
    }else if(n >= 500 && n <= 531){
        return faCloudShowersHeavy;
    }else if(n >= 600 && n <= 622){
        return faSnowflake;
    }else if(n >= 701 && n <= 781){
        return faSmog;
    }else if(n === 800){
        return faSun;
    }else if(n >= 801 && n <= 804){
        return faCloud
    };
};

calcCalsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
}


getWeather = async e => {
    e.preventDefault();
    const searchCity = e.target.elements.city.value;
    const searchCountry = e.target.elements.country.value;
    if(searchCity && searchCountry){
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity},${searchCountry}&appid=${key}`)
    const resp = await api_call.json();
    this.setState({
        city: resp.name,
        country:resp.sys.country,
        icon: resp.weather[0].id,
        main: resp.weather[0].main,
        celsius: this.calcCalsius(resp.main.temp),
        temp_max: this.calcCalsius(resp.main.temp_max),
        temp_min: this.calcCalsius(resp.main.temp_min),
        description: resp.weather[0].description
    });
    }else{
        this.setState({error: true});
    };
}

componentDidMount = () => {
    const WeatherData = localStorage.getItem("weathersSet");
    const setDataWeather = JSON.parse(WeatherData);
    this.setState({celsius: setDataWeather.celsius,
        city: setDataWeather.city,
        country: setDataWeather.country,
        description: setDataWeather.description,
        icon: setDataWeather.icon,
        main: setDataWeather.main,
        temp_max: setDataWeather.temp_max,
        temp_min: setDataWeather.temp_min,
        error: setDataWeather.error})
}


componentDidUpdate = () => {
    const setado = JSON.stringify(this.state);
    localStorage.setItem("weathersSet", setado);
}

    render(){
        return(
        <div className="bod">
            <div className="container">
                <Form getWeather={this.getWeather} error={this.state.error}/>
                <div className="cards">
                <h1 className="city">{this.state.city}</h1>
                <h5><FontAwesomeIcon icon={this.weatherIcon(this.state.icon)} size="9x" /></h5>
                <h1>{this.state.celsius}&deg;</h1>
                <h3>
                    <span>Min: {this.state.temp_min}&deg;</span>
                    <span>Max: {this.state.temp_max}&deg;</span>
                 </h3>
                <p>{this.state.description}</p>
                <a href="/"><button className="WeatherBackButton">Voltar</button></a>
                </div>
            </div>
        </div>
                )
    }
}

export default Weather