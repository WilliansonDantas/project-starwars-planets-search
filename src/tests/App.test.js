import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Testes para 50% de cobertura total da aplicação", () => {
  it("Verifica informações renderizadas no componente Table", () => {
    render(<App />);
  const nameTable = screen.getByRole('columnheader', {  name: /name/i});
  const rotationTable = screen.getByRole('columnheader', {  name: /rotation_period/i});
  const orbitalTable = screen.getByRole('columnheader', {  name: /orbital_period/i});
  const diameterTable = screen.getByRole('columnheader', {  name: /diameter/i});
  const climateTable = screen.getByRole('columnheader', {  name: /climate/i});
  const gravityTable = screen.getByRole('columnheader', {  name: /gravity/i});
  const terrainTable = screen.getByRole('columnheader', {  name: /terrain/i});
  const surfaceTable = screen.getByRole('columnheader', {  name: /surface_water/i});
  const populationTable = screen.getByRole('columnheader', {  name: /population/i});
  const filmsTable = screen.getByRole('columnheader', {  name: /films/i});
  const createdTable = screen.getByRole('columnheader', {  name: /created/i});
  const editedTable = screen.getByRole('columnheader', {  name: /edited/i});
  const urlTable = screen.getByRole('columnheader', {  name: /url/i});

  expect(nameTable).toBeInTheDocument();
  expect(rotationTable).toBeInTheDocument();
  expect(orbitalTable).toBeInTheDocument();
  expect(diameterTable).toBeInTheDocument();
  expect(climateTable).toBeInTheDocument();
  expect(gravityTable).toBeInTheDocument();
  expect(terrainTable).toBeInTheDocument();
  expect(surfaceTable).toBeInTheDocument();
  expect(populationTable).toBeInTheDocument();
  expect(filmsTable).toBeInTheDocument();
  expect(createdTable).toBeInTheDocument();
  expect(editedTable).toBeInTheDocument();
  expect(urlTable).toBeInTheDocument();
  });

  it("Valida informações renderizadas no componente Header", () => {
    render(<App />);
  const nameStarWars = screen.getByRole('heading', {  name: /star wars/i});
  const inputPlanet = screen.getByRole('searchbox');
  const selectColumn = screen.getByText(/column:/i);
  const optionsColumn = screen.getByRole('combobox', {  name: /column:/i});
  const selectComparison = screen.getByText(/comparison:/i);
  const optionsComparison = screen.getByRole('combobox', {  name: /comparison:/i})
  const nameValue = screen.getByText(/value:/i);
  const inputValue = screen.getByRole('textbox', {  name: /value:/i});
  const buttonFilter = screen.getByRole('button', {  name: /filter/i});
  expect(nameStarWars).toBeInTheDocument();
  expect(inputPlanet).toBeInTheDocument();
  expect(selectColumn).toBeInTheDocument();
  expect(optionsColumn).toBeInTheDocument();
  expect(selectComparison).toBeInTheDocument();
  expect(optionsComparison).toBeInTheDocument();
  expect(nameValue).toBeInTheDocument();
  expect(inputValue).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument(); 
  });
});
