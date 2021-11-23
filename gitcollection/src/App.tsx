import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { Repository } from './pages/Repository';


// criando um componente funcional - FC
const App: React.FC = () => {

  return (
   <>
      <Dashboard/>
      <Repository/>      
    </>
    
  );
}

export default App;
