import React, {useState, useEffect} from 'react';

import './styles.css';

export default function Form({onSubmit}) {

    const [github_user, setGithub_user] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
  

    useEffect( () => {

      navigator.geolocation.getCurrentPosition(

        (position) => {
          
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

        },
        (err) => {
          console.log(err);
        },
        {
          timeout: 30000
        }

      )

    }, []);


    async function handleSubmit(e) {

        e.preventDefault();
        await onSubmit({
          github_user,
          techs,
          latitude,
          longitude
        });

        setGithub_user('');
        setTechs('');

    }


    return (

        <form onSubmit={ handleSubmit }>
          
          <div className="input-block">
            <label htmlFor="github_user">Usuário Github</label>
            <input name="github_user" id="github_user" value={ github_user } onChange={ e => setGithub_user(e.target.value) } required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" value={ techs } onChange={ e => setTechs(e.target.value) } required />  
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" value={latitude} onChange={ e => setLatitude(e.target.value) } required />  
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" value={longitude} onChange={ e => setLongitude(e.target.value) } required />
            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>

    );

}