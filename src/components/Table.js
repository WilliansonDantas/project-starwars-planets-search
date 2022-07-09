import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  // const [filterByName, setFilterByName] = useState('');
  const { data, filterByName, setFilterByName } = useContext(StarContext);

  return (
    <>
      <h1>STAR WARS</h1>
      <label htmlFor="busca">
        <input
          id="busca"
          type="text"
          placeholder="Digite o que deseja filtrar"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </label>
      <br />
      <br />
      <br />
      <br />
      <br />
      { data.length === 0 ? null
        : (
          <table>
            <thead>
              <tr>
                <th>Climate</th>
                <th>Created</th>
                <th>Diameter</th>
                <th>Edited</th>
                <th>Films</th>
                <th>Gravity</th>
                <th>Name</th>
                <th>Orbital_period</th>
                <th>Population</th>
                <th>Rotation_period</th>
                <th>Surface_water</th>
                <th>Terrain</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              { data.map((element, index) => (
                <tr key={ index }>
                  <td>
                    { element.climate }
                  </td>
                  <td>
                    { element.created }
                  </td>
                  <td>
                    { element.diameter }
                  </td>
                  <td>
                    { (element.edited)}
                  </td>
                  <td>
                    { element.films }
                  </td>
                  <td>
                    { (element.gravity)}
                  </td>
                  <td>
                    { (element.name)}
                  </td>
                  <td>
                    { (element.orbital_period)}
                  </td>
                  <td>
                    { (element.population)}
                  </td>
                  <td>
                    { (element.rotation_period)}
                  </td>
                  <td>
                    { (element.surface_water)}
                  </td>
                  <td>
                    { (element.terrain)}
                  </td>
                  <td>
                    { (element.url)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </>
  );
}

export default Table;
