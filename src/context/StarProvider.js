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
  const [arrayFiltros, setArrayFiltros] = useState([]);
  const [targetFilter, setTargetFilter] = useState('');

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
    if (comparison === 'maior que') {
      const filterMaior = datafilter
        .filter((planet) => (planet[column] * 1) > (value * 1));
      setDataFilter(filterMaior);
      const filterColumn = newSelectColumn.filter((selectCol) => selectCol !== column);
      setNewSelectColumn(filterColumn);
      setColumn(filterColumn[0]);
      const stringFilter = `${column} ${comparison} ${value}`;
      setArrayFiltros([...arrayFiltros, [stringFilter]]);
    }
    if (comparison === 'menor que') {
      const filterMenor = datafilter
        .filter((planet) => (planet[column] * 1) < (value * 1));
      setDataFilter(filterMenor);
      const filterColumn = newSelectColumn.filter((selectCol) => selectCol !== column);
      setNewSelectColumn(filterColumn);
      setColumn(filterColumn[0]);
      const stringFilter = `${column} ${comparison} ${value}`;
      setArrayFiltros([...arrayFiltros, [stringFilter]]);
    }
    if (comparison === 'igual a') {
      const filterIgual = datafilter
        .filter((planet) => (planet[column] * 1) === (value * 1));
      setDataFilter(filterIgual);
      const filterColumn = newSelectColumn.filter((selectCol) => selectCol !== column);
      setNewSelectColumn(filterColumn);
      setColumn(filterColumn[0]);
      const stringFilter = `${column} ${comparison} ${value}`;
      setArrayFiltros([...arrayFiltros, [stringFilter]]);
    }
  };

  const deleteButton = (filters) => {
    console.log(data);
    const filterDosFiltros = arrayFiltros.filter((filtro) => filtro !== filters);
    setArrayFiltros(filterDosFiltros);
    const indiceZeroFilters = filters[0];
    const indiceUmFilters = filters[1];
    const indiceDoisFilters = filters[2];
    const splitIndiceZeroFilters = indiceZeroFilters.split(' ')[0];
    const filterColumn = selectColumn
      .filter((selectCol) => selectCol === splitIndiceZeroFilters);
    setNewSelectColumn([...newSelectColumn, filterColumn]);
    setColumn(filterColumn[0]);

    if (indiceUmFilters === 'maior que') {
      const filterExcluido = data
        .filter((planet) => (planet[indiceZeroFilters] * 1) > (indiceDoisFilters * 1));
      setDataFilter(filterExcluido);
    }
    if (indiceUmFilters === 'menor que') {
      console.log('entrou no menor que');
      const filterExcluido = data
        .filter((planet) => (planet[indiceZeroFilters] * 1) < (indiceDoisFilters * 1));
      setDataFilter(filterExcluido);
    }
    if (indiceUmFilters === 'igual a') {
      const filterExcluido = data
        .filter((planet) => (planet[indiceZeroFilters] * 1) === (indiceDoisFilters * 1));
      setDataFilter(filterExcluido);
    }
  };

  const deleteAllFilters = () => {
    setNewSelectColumn([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setArrayFiltros([]);
    setDataFilter(data);
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
        handleFilter,
        selectColumn,
        setSelectColumn,
        newSelectColumn,
        selectComparison,
        setSelectComparison,
        arrayFiltros,
        targetFilter,
        setTargetFilter,
        deleteButton,
        deleteAllFilters } }
    >
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
