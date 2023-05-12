import React, { useState } from 'react';
import { Container, Row, Nav, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cadastro(){

  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/users', formData);
      console.log(response.data);
      alert('inserido!');
      setFormData({ // definir o estado inicial do formData
        email: '',
        nome: '',
        senha: '',
        nrsec: ''
      });
    } catch (error) {
      console.error(error);
    }
  };


    return(
        <div class="container">
        <h1>Formulário de Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required/>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="senha" id="password" name="senha" value={formData.senha} onChange={handleChange} required/>
          </div>
          <div className="form-group">
          <label htmlFor="nrsec">Número de segurança:</label>
          <input type="text" id="nrsec" name="nrsec" value={formData.nrsec} onChange={handleChange} required/>
        </div>
          <button type="submit" class="submit-btn">Cadastrar</button>
        </form>
      </div>
    )
};
export default Cadastro;