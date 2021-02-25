import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.countries.map((elm, index) => {
            return (
              <div>
              <img src ={elm.flag} alt ="flag" ></img>
                <Link key={index.cca3} to={`/${index.cca3}`}>
                  {elm.name.common}
                </Link>
              </div>
            );
          })
         }
        </ul>
      </div>
    );
  }
}
export default CountriesList;
