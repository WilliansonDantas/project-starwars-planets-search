import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Header() {
  const {
    filterByName,
    setFilterByName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleFilter } = useContext(StarContext);

  return (
    <>
      <h1>STAR WARS</h1>
      <form>
        <label htmlFor="busca">
          <input
            id="busca"
            type="search"
            placeholder="Enter the name of a planet"
            data-testid="name-filter"
            value={ filterByName }
            onChange={ (e) => setFilterByName(e.target.value) }
          />
        </label>
        <hr />
        <label htmlFor="column">
          Column:
          <select
            id="column"
            data-testid="column-filter"
            name="column"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <hr />
        <label htmlFor="comparison">
          Comparison:
          <select
            id="comparison"
            data-testid="comparison-filter"
            name="comparison"
            value={ comparison }
            onChange={ (e) => setComparison(e.target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <hr />
        <label htmlFor="value">
          Value:
          <input
            id="value"
            data-testid="value-filter"
            placeholder="Enter a value"
            name="value"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilter }
        >
          Filter
        </button>
      </form>
      <hr />
    </>
  );
}

export default Header;
