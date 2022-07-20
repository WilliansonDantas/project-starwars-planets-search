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
    selectColumn,
    newSelectColumn,
    selectComparison,
    setFilterByNumericValues,
    filterByNumericValues,
    setNewSelectColumn,
    data,
    setDataFilter,
    sort,
    handleSort,
    setSortedColumn,
    sortedColumn,
    setSuccessors,
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

              <option
                key={ ind }
              >
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
        { filterByNumericValues.map((filters, index) => (
          <div
            key={ index }
            data-testid="filter"
            name="targetFilter"
            value={ filters }
          >
            { `${filters.column} ${filters.comparison} ${filters.value}` }
            <button
              type="button"
              onClick={ () => {
                setDataFilter(data);
                setFilterByNumericValues(
                  filterByNumericValues
                    .filter((filterDelet) => filterDelet !== filters),
                );
                const filterColumn = selectColumn
                  .filter((selectCol) => selectCol === filters.column);
                setNewSelectColumn([...newSelectColumn, filterColumn]);
                setColumn(newSelectColumn[0]);
              } }
            >
              Delete
            </button>
          </div>
        )) }
      </form>
      <hr />
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setFilterByNumericValues([]);
          setDataFilter(data);
          setNewSelectColumn(selectColumn);
        } }
      >
        Remover todas filtragens
      </button>
      <hr />
      <form>
        <label htmlFor="sortedColumn">
          Order:
          <select
            id="sortedColumn"
            data-testid="column-sort"
            name="sortedColumn"
            value={ sortedColumn }
            onChange={ (e) => setSortedColumn(e.target.value) }
          >
            { sort.map((option, index) => (

              <option
                key={ index }
              >
                {option}
              </option>
            ))}
          </select>
        </label>
        <hr />
        <label htmlFor="sortASC">
          Ascendente
          <input
            id="sortASC"
            name="sort"
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ (e) => setSuccessors(e.target.value) }
          />
        </label>
        <label htmlFor="sortDESC">
          Descendente
          <input
            id="sortDESC"
            name="sort"
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ (e) => setSuccessors(e.target.value) }
          />
        </label>
        <hr />
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleSort }
        >
          Order
        </button>
      </form>
    </>
  );
}

export default Header;
