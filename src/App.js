import React from 'react';
import axios from 'axios';

const API = 'https://api.hgbrasil.com/weather?woeid=455826&format=json-cors&locale=pt';

class App extends React.Component {
  componentDidMount(){
    axios.get(API)
    .then(({data}) => {
      this.setState({
        city: data.results.city_name,
        forecast: data.results.forecast,
      });
    });
  }

  state = {
      city: "",
      forecast: [],
  }

  render(){
    return (
      <div className="container">
          <h1>{this.state.city}</h1>
          <table className="striped centered">
            <thead>
              <tr>
                <th>Data</th>
                <th>Min</th>
                <th>Max</th>
                <th>condição</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.forecast.map((day, index) => {
                  return (
                      <tr key={index}>
                          <td>{day.date}</td>
                          <td>{day.min}</td>
                          <td>{day.max}</td>
                          <td>{day.description}</td>
                          <td><img src={`/weather-icons/${day.condition}.svg`} 
                          alt={day.description}/></td>
                      </tr>
                  );
                })
              }
              
            </tbody>
          </table>
    </div>
    );
  }
}

export default App;