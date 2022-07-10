import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { datafilter } = useContext(StarContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation_period</th>
          <th>Orbital_period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { datafilter.map((element, index) => (
          <tr key={ index }>
            <td>
              {(element.name)}
            </td>
            <td>
              {(element.rotation_period)}
            </td>
            <td>
              {(element.orbital_period)}
            </td>
            <td>
              {(element.diameter)}
            </td>
            <td>
              {(element.climate)}
            </td>
            <td>
              {(element.gravity)}
            </td>
            <td>
              {(element.terrain)}
            </td>
            <td>
              {(element.surface_water)}
            </td>
            <td>
              {(element.population)}
            </td>
            <td>
              {element.films}
            </td>
            <td>
              {(element.created)}
            </td>
            <td>
              {(element.edited)}
            </td>
            <td>
              {(element.url)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
