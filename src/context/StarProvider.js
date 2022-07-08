import React, { useState } from 'react';
import StarContext from './StarContext';

function StarProvider({ children }) {
  console.log(children);

  const [teste, setTeste] = useState({ });

  console.log(teste);
  console.log(setTeste);

  return (
    <StarContext.Provider value={ { } }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
