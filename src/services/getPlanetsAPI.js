const getPlanetsAPI = () => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((data) => data);
};

export default getPlanetsAPI;
