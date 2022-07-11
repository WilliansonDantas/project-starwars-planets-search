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
    handleFilter,
    newSelectColumn,
    selectComparison,
    arrayFiltros,
    deleteButton,
    deleteAllFilters,
    setTargetFilter,
  } = useContext(StarContext);

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
            { newSelectColumn.map((options, ind) => (

              <option key={ ind }>
                {options}
              </option>
            ))}
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
            { selectComparison.map((selectOpt, indice) => (
              <option key={ indice }>
                { selectOpt }
              </option>

            ))}
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
      <form>
        Filters:
        { arrayFiltros.map((filters, index) => (
          <div
            key={ index }
            data-testid="filter"
            name="targetFilter"
            value={ filters }
            onChange={ (e) => setTargetFilter(e.target.value) }
          >
            { filters }
            <button
              type="button"
              onClick={ () => deleteButton(filters) }
              data-testid="filter"
            >
              Delete
            </button>
          </div>
        )) }
      </form>
      <hr />
      <button
        type="button"
        onClick={ deleteAllFilters }
        data-testid="button-remove-filters"
      >
        Remover todas filtragens
      </button>
      <hr />
    </>
  );
}

export default Header;
