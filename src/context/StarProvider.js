import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([{
    climate: '',
    created: '',
    diameter: 0,
    edited: '',
    films: [],
    gravity: '',
    name: '',
    orbital_period: 0,
    population: 0,
    rotation_period: 0,
    surface_water: 0,
    terrain: '',
    url: '',
  }]);

  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const getPlanetsAPI = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((dados) => {
          const API = dados.results;
          setData(API);
          console.log('teste');
        });
    };
    getPlanetsAPI();
    console.log('teste');
  }, []);

  useEffect(() => {
    const filterData = data.filter((planet) => planet.name.includes(filterByName));
    setData(filterData);
  }, [filterByName]);

  return (
    <StarContext.Provider value={ { data, filterByName, setFilterByName } }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
