import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import CountriesList from './component/CountriesList'
import Navbar from './component/Navbar'
import countries from './countries.json'
import CountryDetails from './component/CountryDetails'

class App extends Component {
  state = {
    countries: countries
  }

  componentDidMount(){
    this.setState({countries: countries})
  }
  render() {
    const {countries} = this.state
    return (
      
      <div>
        <Navbar/>
        <Switch>
        <CountriesList countries = {countries}/>
        <Route exact path='/countries/:cca3' render={props => (<CountryDetails {...props} countries={countries}/>)} />
        </Switch>
      </div>
    )
  }
}
export default App
