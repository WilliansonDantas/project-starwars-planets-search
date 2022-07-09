import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

// Referência 01: Number.isNaN()
// Link da documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

function Table() {
  const { datafilter } = useContext(StarContext);

  return (
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
        { datafilter.map((element, index) => (
          <tr key={ index }>
            <td>
              { (element.climate) }
            </td>
            <td>
              { (element.created) }
            </td>
            <td>
              { (Number.isNaN(element.diameter * 1) ? 0
                : element.diameter * 1) }
              {/* { (element.diameter) } */}
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
              { (Number.isNaN(element.orbital_period * 1) ? 0
                : element.orbital_period * 1)}
              {/* { Number(element.orbital_period)} */}
            </td>
            <td>
              { (Number.isNaN(element.population * 1) ? 0
                : element.population * 1)}
              {/* { (element.population)} */}
            </td>
            <td>
              { (Number.isNaN(element.rotation_period * 1) ? 0
                : element.rotation_period * 1)}
              {/* { (element.rotation_period)} */}
            </td>
            <td>
              { (Number.isNaN(element.surface_water * 1) ? 0
                : element.surface_water * 1) }
              {/* { (element.surface_water) } */}
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
  );
}

export default Table;
