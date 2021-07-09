import './App.css';
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import {Component} from "react";
import Button from '@material-ui/core/Button';

const places = ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay']


class App extends Component {
     state = {
        activePlace: 0,
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">

                {places.map((place, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            this.setState({activePlace: index });
                        }} >
                        {place}
                    </Button>
                ))}

                <WeatherDisplay
                    key={activePlace}
                    name={places[activePlace]} />
            </div>

        )
    }
};

export default App;