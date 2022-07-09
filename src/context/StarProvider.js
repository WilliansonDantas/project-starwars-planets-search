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

  const [datafilter, setDataFilter] = useState(data);

  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const getPlanetsAPI = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((dados) => {
          setData(dados.results);
        });
    };
    getPlanetsAPI();
  }, []);

  useEffect(() => {
    const filterData = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByName.toLowerCase()));
    setDataFilter(filterData);
  }, [filterByName, data]);

  return (
    <StarContext.Provider value={ { datafilter, filterByName, setFilterByName } }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
