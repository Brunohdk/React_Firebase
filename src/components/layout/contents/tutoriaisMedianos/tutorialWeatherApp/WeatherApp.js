import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy} from '@fortawesome/free-solid-svg-icons'
import './styles/weather.css'

const key =  '429736441cf3572838aa10530929f7cd';


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
        error:false
    }
minmaxTemp = (min, max) => {
    return(
            <h3>
            <span>{min}&deg;</span>
            <span>{max}&deg;</span>
            </h3>
            )
    }

getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${key}`)
    const resp = await api_call.json();
    console.log(resp);
    this.setState({
        city: resp.name,
        country:resp.sys.country,
        icon: resp.weather[0].icon,
        main: resp.weather[0].main,
        celsius: resp.main.temp,
        temp_max: resp.main.temp_max,
        temp_min: resp.main.temp_min,
        description: resp.weather[0].description,
    })
}

    render(){
        {this.getWeather()}
        return(
            <div className="container">
                <div className="cards" style={{textAlign:'center', border:'3px solid black'}}>
                <h1>{this.state.city}</h1>
                <h5 className="py-5"><FontAwesomeIcon icon={faCloudShowersHeavy} size="9x" /></h5>
                <h1 className="py-2">{this.state.celsius}&deg;</h1>
                {this.minmaxTemp(this.state.temp_min, this.state.temp_max)}
                <p>{this.state.description}</p>
                </div>
            </div>
                )
    }
}

export default Weather