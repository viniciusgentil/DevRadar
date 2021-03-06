import React, { useEffect, useState } from 'react';

import api from './services/api';

import Form from './components/Form';
import Dev from './components/Dev';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  const [devs, setDevs] = useState([]);


  useEffect( () => {

    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();

  }, []);


  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);

  }


  return (

    <div id="app">

        <aside>

          <strong>Cadastrar</strong>

          <Form onSubmit={ handleAddDev } />

        </aside>

        <main>

          <ul>
            { devs.map( dev => (
              <Dev key={ dev._id } dev={ dev } />
            ))}
            
          </ul>

        </main>

    </div>

  );

}

export default App;
