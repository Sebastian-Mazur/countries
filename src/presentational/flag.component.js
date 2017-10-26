import React from 'react';
import '../styles/country.css';

const CountryFlag = (props) => (
    <div className="country-flag-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country-flag" />
    </div>
);

export default CountryFlag;