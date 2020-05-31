import React, { useState } from "react";

import api from "../../services/api";
import Checkbox from "../../components/Checkbox";

import "./styles.css";

const _symptoms = [
  'Tosse seca',
  'Cansaço',
  'Febre',
  'Dor de cabeça',
  'Perda de paladar',
  'Perda de olfato',
  'Dificuldade para respirar',
  'Coriza',
  'Dor de garganta'
];

function Client() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [age, setAge] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      address,
      phone,
      symptoms,
      age
    };

    try {
      const response = await api.post("/register", 
        data
      );
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <section className="app">
      <h1>Disk Saúde Traipu</h1>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="data">
              <strong>Informe seus dados</strong>
              <label>Nome Completo</label>
              <input 
                type="text" 
                value={name} placeholder="Nome Completo" 
                onChange={(event) => setName(event.target.value)}
              />
              <label>Endereço</label>
              <input 
                type="text" value={address} 
                placeholder="Endereço" 
                onChange={(event) => setAddress(event.target.value)}
              />
              <label>Telefone</label>
              <input 
                type="text" 
                value={phone} 
                placeholder="Telefone" 
                onChange={(event) => setPhone(event.target.value)}
              />
              <label>Idade</label>
              <input 
                type="text" 
                value={age} 
                placeholder="Idade" 
                onChange={(event) => setAge(event.target.value)}
              />
            </div>

            <div className="symptoms">
              <strong>Marque os sintomas que você está sentindo</strong>
              {_symptoms.map(symptom => (
                <Checkbox selected={symptoms} setSelected={setSymptoms} value={symptom} />
              ))}
            </div>
          </div>

          <button className="btn-submit" type="submit">Enviar</button>
        </form>
      </div>
    </section> 
  );
}

export default Client;