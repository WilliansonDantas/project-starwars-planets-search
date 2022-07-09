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
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getPlanetsAPI = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((dados) => {
          console.log(dados.results);
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

  const handleFilter = () => {
    console.log(column);
    console.log(comparison);
    console.log(value);
    if (comparison === 'maior que') {
      console.log('entrou no maior que');
      const filterMaior = data.filter((planet) => (planet[column]) >= (value));
      setDataFilter(filterMaior);
    }
    if (comparison === 'menor que') {
      console.log('entrou no menor que');
      const filterMenor = data.filter((planet) => (planet[column]) <= (value));
      setDataFilter(filterMenor);
    }
    if (comparison === 'igual a') {
      console.log('entrou igual a');
      const filterIgual = data.filter((planet) => (planet[column]) === (value));
      setDataFilter(filterIgual);
    }
  };

  return (
    <StarContext.Provider
      value={ {
        datafilter,
        filterByName,
        setFilterByName,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        handleFilter } }
    >
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
