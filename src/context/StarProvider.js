import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

const UM = 1;
const MENOS_UM = -1;

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
  const [sortedColumn, setSortedColumn] = useState('population');
  const [successors, setSuccessors] = useState('');
  const [order, setOrder] = useState();
  const [sort, setSort] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // Referência 01: sort() em array de objetos
  // https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/
  useEffect(() => {
    const getPlanetsAPI = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((dados) => {
          dados.results
            .sort((a, b) => {
              if (a.name > b.name) {
                return UM;
              }
              return MENOS_UM;
            });
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

  const handleSort = () => {
    setOrder({ sortedColumn, successors });
    if (successors === 'ASC') {
      const ASC = datafilter
        .sort((itemA, itemB) => ((itemA[sortedColumn] * 1
          || 0) - (itemB[sortedColumn] * 1 || 0)));
      setDataFilter(ASC);
    }
    if (successors === 'DESC') {
      const DESC = datafilter
        .sort((itemA, itemB) => ((itemB[sortedColumn] * 1
          || 0) - (itemA[sortedColumn] * 1 || 0)));
      setDataFilter(DESC);
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
        sort,
        setSort,
        handleSort,
        sortedColumn,
        setSortedColumn,
        successors,
        setSuccessors,
        order,
        setOrder,
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
