import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const planetsMock = {
  count: 60,
  next: 'https://swapi-trybe.herokuapp.com/api/planets/?page=2',
  previous: null,
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/1/',
        'https://swapi-trybe.herokuapp.com/api/people/2/',
        'https://swapi-trybe.herokuapp.com/api/people/4/',
        'https://swapi-trybe.herokuapp.com/api/people/6/',
        'https://swapi-trybe.herokuapp.com/api/people/7/',
        'https://swapi-trybe.herokuapp.com/api/people/8/',
        'https://swapi-trybe.herokuapp.com/api/people/9/',
        'https://swapi-trybe.herokuapp.com/api/people/11/',
        'https://swapi-trybe.herokuapp.com/api/people/43/',
        'https://swapi-trybe.herokuapp.com/api/people/62/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/5/',
        'https://swapi-trybe.herokuapp.com/api/people/68/',
        'https://swapi-trybe.herokuapp.com/api/people/81/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/2/',
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: '1 standard',
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
      ],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/3/',
    },
    {
      name: 'Hoth',
      rotation_period: '23',
      orbital_period: '549',
      diameter: '7200',
      climate: 'frozen',
      gravity: '1.1 standard',
      terrain: 'tundra, ice caves, mountain ranges',
      surface_water: '100',
      population: 'unknown',
      residents: [],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/2/',
      ],
      created: '2014-12-10T11:39:13.934000Z',
      edited: '2014-12-20T20:58:18.423000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/4/',
    },
    {
      name: 'Dagobah',
      rotation_period: '23',
      orbital_period: '341',
      diameter: '8900',
      climate: 'murky',
      gravity: 'N/A',
      terrain: 'swamp, jungles',
      surface_water: '8',
      population: 'unknown',
      residents: [],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/2/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-10T11:42:22.590000Z',
      edited: '2014-12-20T20:58:18.425000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/5/',
    },
    {
      name: 'Bespin',
      rotation_period: '12',
      orbital_period: '5110',
      diameter: '118000',
      climate: 'temperate',
      gravity: '1.5 (surface), 1 standard (Cloud City)',
      terrain: 'gas giant',
      surface_water: '0',
      population: '6000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/26/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/2/',
      ],
      created: '2014-12-10T11:43:55.240000Z',
      edited: '2014-12-20T20:58:18.427000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/6/',
    },
    {
      name: 'Endor',
      rotation_period: '18',
      orbital_period: '402',
      diameter: '4900',
      climate: 'temperate',
      gravity: '0.85 standard',
      terrain: 'forests, mountains, lakes',
      surface_water: '8',
      population: '30000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/30/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/3/',
      ],
      created: '2014-12-10T11:50:29.349000Z',
      edited: '2014-12-20T20:58:18.429000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/7/',
    },
    {
      name: 'Naboo',
      rotation_period: '26',
      orbital_period: '312',
      diameter: '12120',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grassy hills, swamps, forests, mountains',
      surface_water: '12',
      population: '4500000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/3/',
        'https://swapi-trybe.herokuapp.com/api/people/21/',
        'https://swapi-trybe.herokuapp.com/api/people/35/',
        'https://swapi-trybe.herokuapp.com/api/people/36/',
        'https://swapi-trybe.herokuapp.com/api/people/37/',
        'https://swapi-trybe.herokuapp.com/api/people/38/',
        'https://swapi-trybe.herokuapp.com/api/people/39/',
        'https://swapi-trybe.herokuapp.com/api/people/42/',
        'https://swapi-trybe.herokuapp.com/api/people/60/',
        'https://swapi-trybe.herokuapp.com/api/people/61/',
        'https://swapi-trybe.herokuapp.com/api/people/66/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-10T11:52:31.066000Z',
      edited: '2014-12-20T20:58:18.430000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/8/',
    },
    {
      name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/34/',
        'https://swapi-trybe.herokuapp.com/api/people/55/',
        'https://swapi-trybe.herokuapp.com/api/people/74/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/9/',
    },
    {
      name: 'Kamino',
      rotation_period: '27',
      orbital_period: '463',
      diameter: '19720',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'ocean',
      surface_water: '100',
      population: '1000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/22/',
        'https://swapi-trybe.herokuapp.com/api/people/72/',
        'https://swapi-trybe.herokuapp.com/api/people/73/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/5/',
      ],
      created: '2014-12-10T12:45:06.577000Z',
      edited: '2014-12-20T20:58:18.434000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/10/',
    },
  ],
};

describe("Testes para cobertura total da aplicação", () => {
  it("Verifica as tags renderizadas na Tabela", () => {
    render(<App />);
          
    const nameTable = screen.getByRole('columnheader', {  name: /name/i});
    expect(nameTable).toBeInTheDocument();
    
    const rotationTable = screen.getByRole('columnheader', {  name: /rotation_period/i});
    expect(rotationTable).toBeInTheDocument();
    
    const orbitalTable = screen.getByRole('columnheader', {  name: /orbital_period/i});
    expect(orbitalTable).toBeInTheDocument();
    
    const diameterTable = screen.getByRole('columnheader', {  name: /diameter/i});
    expect(diameterTable).toBeInTheDocument();
    
    const climateTable = screen.getByRole('columnheader', {  name: /climate/i});
    expect(climateTable).toBeInTheDocument();
    
    const gravityTable = screen.getByRole('columnheader', {  name: /gravity/i});
    expect(gravityTable).toBeInTheDocument();
    
    const terrainTable = screen.getByRole('columnheader', {  name: /terrain/i});
    expect(terrainTable).toBeInTheDocument();
    
    const surfaceTable = screen.getByRole('columnheader', {  name: /surface_water/i});
    expect(surfaceTable).toBeInTheDocument();
    
    const populationTable = screen.getByRole('columnheader', {  name: /population/i});
    expect(populationTable).toBeInTheDocument();
    
    const filmsTable = screen.getByRole('columnheader', {  name: /films/i});
    expect(filmsTable).toBeInTheDocument();
    
    const createdTable = screen.getByRole('columnheader', {  name: /created/i});
    expect(createdTable).toBeInTheDocument();
    
    const editedTable = screen.getByRole('columnheader', {  name: /edited/i});
    expect(editedTable).toBeInTheDocument();
    
    const urlTable = screen.getByRole('columnheader', {  name: /url/i});
    expect(urlTable).toBeInTheDocument(); 
});

it("Verifica chamada da API após filtro por nome do planeta", async () => {
    jest.spyOn(global, 'fetch')
      .mockResolvedValue({ json: jest.fn().mockResolvedValue(planetsMock) })
      render(<App />);

    const nameStarWars = screen.getByRole('heading', {  name: /star wars/i});
    expect(nameStarWars).toBeInTheDocument();
      
    const inputPlanet = screen.getByRole('searchbox');
    expect(inputPlanet).toHaveProperty('type', 'search');
    expect(inputPlanet).toBeInTheDocument();
    userEvent.type(inputPlanet, 'oo');
    expect(inputPlanet).toHaveValue('oo');
    const planetElement = await screen.findByRole('cell', {  name: /tatooine/i});
    expect(planetElement).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toBeCalledTimes(1);

    global.fetch.mockRestore()
    jest.restoreAllMocks()
  });

  it("Verifica inputs e botões renderizados na tela", async () => {  
      render(<App />);
    
    const selectColumn = screen.getByText(/column:/i);
    expect(selectColumn).toBeInTheDocument();
    
    const optionsColumn = screen.getByRole('combobox', {  name: /column:/i});
    expect(optionsColumn).toBeInTheDocument();
    userEvent.type(optionsColumn, 'population');
    expect(optionsColumn).toHaveValue('population');
    
    const selectComparison = screen.getByText(/comparison:/i);
    expect(selectComparison).toBeInTheDocument();
    
    const optionsComparison = screen.getByRole('combobox', {  name: /comparison:/i})
    expect(optionsComparison).toBeInTheDocument();
    userEvent.type(optionsComparison, 'maior que');
    expect(optionsComparison).toHaveValue('maior que');
    
    const nameValue = screen.getByText(/value:/i);
    expect(nameValue).toBeInTheDocument();
    
    const inputValue = screen.getByRole('textbox', {  name: /value:/i});
    expect(inputValue).toBeInTheDocument();
    userEvent.type(inputValue, '0');
    expect(inputValue).toHaveValue('00');
    
    const buttonFilter = screen.getByRole('button', {  name: /filter/i});
    expect(buttonFilter).toBeInTheDocument();
    userEvent.click(inputValue);
    const filtersMade = screen.getByText(/filters:/i)
    expect(filtersMade).toBeInTheDocument();
    
    const allDelete = screen.getByRole('button', { name: /remover todas filtragens/i })
    expect(allDelete).toBeInTheDocument();
    userEvent.click(allDelete);
});

  it("Verifica condicional 'maior que'", () => {
      render(<App />);

    // if maior que
    const maiorQue = screen.getByRole('combobox', {  name: /comparison:/i, option: /maior que/i })
    userEvent.type(maiorQue, 'maior que');
    expect(maiorQue).toHaveValue('maior que');
    const filterColumn = screen.getByRole('combobox', {  name: /column:/i,  option: /population/i });
    userEvent.type(filterColumn, 'population');
    expect(filterColumn).toHaveValue('population');
    const inputValue = screen.getByRole('textbox', {  name: /value:/i,  value: /0/i });
    userEvent.type(inputValue, '0');
    expect(inputValue).toHaveValue('00');
    const buttonFilter = screen.getByRole('button', {  name: /filter/i});
    userEvent.click(buttonFilter);
    const filterDelete = screen.getByRole('button', {name: /delete/i})
    expect(filterDelete).toBeInTheDocument();
    userEvent.click(filterDelete);  
    });

  it("Verifica condicional 'menor que'", () => {
        render(<App />);
    // Referência 01: selectOptions
    // https://testing-library.com/docs/ecosystem-user-event/
    // Referência 02: selectOptions
    // https://cathalmacdonnacha.com/how-to-test-a-select-element-with-react-testing-library
    // if menor que
    const menorQue = screen.getByRole('combobox', {  name: /comparison:/i, option: /menor que/i })
    userEvent.selectOptions(menorQue, 'menor que')
    userEvent.type(menorQue, 'menor que');
    expect(menorQue).toHaveValue('menor que');
    const filterColumn = screen.getByRole('combobox', {  name: /column:/i,  option: /diameter/i });
    userEvent.selectOptions(filterColumn, 'diameter')
    userEvent.type(filterColumn, 'diameter');
    expect(filterColumn).toHaveValue('diameter');
    const inputValue = screen.getByRole('textbox', {  name: /value:/i,  value: /11000/i });
    userEvent.type(inputValue, '11000');
    expect(inputValue).toHaveValue('011000');
    const buttonFilter = screen.getByRole('button', {  name: /filter/i});
    userEvent.click(buttonFilter);
    const filterDelete = screen.getByRole('button', {name: /delete/i})
    expect(filterDelete).toBeInTheDocument();
    userEvent.click(filterDelete); 
    });

    it("Verifica condicional 'igual a'", () => {
      render(<App />);
  
    // if igual a
    const igualA = screen.getByRole('combobox', {  name: /comparison:/i, option: /igual a/i })
    userEvent.selectOptions(igualA, 'igual a')
    userEvent.type(igualA, 'igual a');
    expect(igualA).toHaveValue('igual a');
    const filterIgual = screen.getByRole('combobox', {  name: /column:/i, option: /rotation_period/i});
    userEvent.selectOptions(filterIgual, 'rotation_period')
    userEvent.type(filterIgual, 'rotation_period');
    expect(filterIgual).toHaveValue('rotation_period');
    const inputIgual = screen.getByRole('textbox', {  name: /value:/i, value: /24/i});
    userEvent.type(inputIgual, '24');
    expect(inputIgual).toHaveValue('024');
    const buttonIgual = screen.getByRole('button', {  name: /filter/i});
    userEvent.click(buttonIgual);
    const filterDelete = screen.getByRole('button', {name: /delete/i})
    expect(filterDelete).toBeInTheDocument();
    userEvent.click(filterDelete); 
    });

    it("Verifica inputs da seção de ordenar", () => {
      render(<App />);
  
    const order = screen.getByText(/order:/i);
    expect(order).toBeInTheDocument();
    const orderSelect = screen.getByRole('combobox', {  name: /order:/i})
    expect(orderSelect).toBeInTheDocument();
    expect(orderSelect).toHaveValue('population');

    const ASC = screen.getByText(/ascendente/i);
    expect(ASC).toBeInTheDocument();
    const checkASC = screen.getByRole('radio', {  name: /ascendente/i});
    expect(checkASC).toBeInTheDocument();
    const DESC = screen.getByText(/descendente/i);
    expect(DESC).toBeInTheDocument();
    const checkDESC = screen.getByRole('radio', {  name: /descendente/i})
    expect(checkDESC).toBeInTheDocument();
    const buttonOrder = screen.getByRole('button', {  name: /order/i})
    expect(buttonOrder).toBeInTheDocument();
    });

    it("Verifica ordenação Ascendente", () => {
      render(<App />);
  
    const order = screen.getByText(/order:/i);
    expect(order).toBeInTheDocument();
    const orderSelect = screen.getByRole('combobox', {  name: /order:/i})
    expect(orderSelect).toBeInTheDocument();
    expect(orderSelect).toHaveValue('population');

    const ASC = screen.getByText(/ascendente/i);
    expect(ASC).toBeInTheDocument();
    const checkASC = screen.getByRole('radio', {  name: /ascendente/i});
    userEvent.type(checkASC, 'ASC');
    expect(checkASC).toBeInTheDocument();
    const DESC = screen.getByText(/descendente/i);
    expect(DESC).toBeInTheDocument();
    const checkDESC = screen.getByRole('radio', {  name: /descendente/i})
    userEvent.type(checkDESC, 'DESC');
    expect(checkDESC).toBeInTheDocument();
    const buttonOrder = screen.getByRole('button', {  name: /order/i})
    expect(buttonOrder).toBeInTheDocument();
    userEvent.click(buttonOrder)
    });

    it("Verifica ordenação Ascendente", async () => {
      render(<App />);
  
      const orderSelect = screen.getByTestId('column-sort')
      userEvent.selectOptions(orderSelect, 'population')
      expect(orderSelect).toHaveValue('population');
  
      const radioASC = screen.getByRole('radio', {  name: /ascendente/i})
      userEvent.click(radioASC)
  
      const buttonOrder = screen.getByRole('button', {  name: /order/i})
      userEvent.click(buttonOrder)

      // const planetASC = await waitfor( () => screen.getByRole('cell', {  name: /dagobah/i}))
      // expect(planetASC).toBeInTheDocument();
    });

    it("Verifica ordenação Descendente", async () => {
      render(<App />);
  
    const orderSelect = screen.getByTestId('column-sort')
    userEvent.selectOptions(orderSelect, 'diameter')
    expect(orderSelect).toHaveValue('diameter');

    const radioDESC = screen.getByRole('radio', {name: /descendente/i})
    userEvent.click(radioDESC)

    const buttonOrder = screen.getByRole('button', {  name: /order/i})
    userEvent.click(buttonOrder)

    // const planetASC = await waitFor(() => screen.getByRole('cell', {  name: /dagobah/i}), 2000)
    // expect(planetASC[0].textContent).toBe('Bespin')

    });
});
