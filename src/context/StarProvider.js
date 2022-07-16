import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([{
    climate: '',
    created: '',
    diameter: '',
    edited: '',
    films: '',
    gravity: '',
    name: '',
    orbital_period: '',
    population: '',
    rotation_period: '',
    surface_water: '',
    terrain: '',
    url: '',
  }]);
  const [datafilter, setDataFilter] = useState(data);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [selectColumn, setSelectColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [newSelectColumn, setNewSelectColumn] = useState(selectColumn);
  const [selectComparison, setSelectComparison] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);

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

  const handleFilter = () => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  };

  useEffect(() => {
    filterByNumericValues.forEach((arrayFilters) => {
      if (arrayFilters.comparison === 'maior que') {
        const filterMaior = datafilter
          .filter((planet) => (planet[arrayFilters.column] * 1)
          > (arrayFilters.value * 1));
        setDataFilter(filterMaior);
        const filterColumn = newSelectColumn
          .filter((selectCol) => selectCol !== arrayFilters.column);
        setNewSelectColumn(filterColumn);
        setColumn(filterColumn[0]);
      }
      if (arrayFilters.comparison === 'menor que') {
        const filterMenor = datafilter
          .filter((planet) => (planet[arrayFilters.column] * 1)
          < (arrayFilters.value * 1));
        setDataFilter(filterMenor);
        const filterColumn = newSelectColumn
          .filter((selectCol) => selectCol !== arrayFilters.column);
        setNewSelectColumn(filterColumn);
        setColumn(filterColumn[0]);
      }
      if (arrayFilters.comparison === 'igual a') {
        const filterIgual = datafilter
          .filter((planet) => (planet[arrayFilters.column] * 1)
          === (arrayFilters.value * 1));
        setDataFilter(filterIgual);
        const filterColumn = newSelectColumn
          .filter((selectCol) => selectCol !== arrayFilters.column);
        setNewSelectColumn(filterColumn);
        setColumn(filterColumn[0]);
      }
    });
  }, [filterByNumericValues]);

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
        handleFilter,
        selectColumn,
        setSelectColumn,
        newSelectColumn,
        selectComparison,
        setSelectComparison,
        setFilterByNumericValues,
        filterByNumericValues,
        setNewSelectColumn,
        data,
        setDataFilter,
      } }
    >
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
