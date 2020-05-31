import React, { useState, useEffect } from 'react';

import api from "../../services/api";
import TopBar from "../../components/Topbar";
import './styles.css';

function Dashboard() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleUsers(page);
  }, [])

  async function handleUsers(page) {
    try {
      setLoading(true);

      const response = await api.get(`/users?page=${page}`);
      const { docs, ...infos } = response.data;

      setUsers(docs);
      setInfo(infos);
      setPage(page);

      setLoading(false);
    } catch (err) {
      console.log(err)
    }
  }

  function prevPage() {
    if(page === 1) return;
    
    const pageNumber = page - 1;

    handleUsers(pageNumber);
  }

  function nextPage() {
    if(page === info.pages) return;
    
    const pageNumber = page + 1;

    handleUsers(pageNumber);
  }

  // async function handleStatus(id) {
  //   try {
  //     await api.get(`/users/:${id}`);
  //     const { docs, ...infos } = response.data;

  //     setUsers(docs);
  //     setInfo(infos);
  //     setPage(page);

  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <section className="dashboard">
      <TopBar quantity={Users.length} />
      {loading 
        ? 'loading'
        : <ul className="cards">
          {Users.map(user => (
            <li className="card-user" key={user._id}>
              <div className="user-info">
                <p>
                  <strong>Nome:</strong>
                  <label> {user.name}</label>
                </p>
                <p>
                  <strong>Idade:</strong>
                  <label> {user.age}</label>
                </p>
                <p>
                  <strong>Telefone:</strong>
                  <label> {user.phone}</label>
                </p>
                <p>
                  <strong>Endereço:</strong>
                  <label> {user.address}</label>
                </p>
                {/* <p>
                  <button onClick={() => handleStatus(user._id)}> + </button>
                  <span>!  </span>
                  <span>-</span>
                </p> */}
              </div>
              <ul className="user-symptom">
                <h5>Sintomas:</h5>
                {user.symptoms.map(symptom => <li>{symptom}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      }
    </section>
  );
}

export default Dashboard;