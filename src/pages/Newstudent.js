import React, { Fragment, useState } from 'react';
import { Button, FormControl, Input } from '@material-ui/core';
import { CloudUpload, Send } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const Newstudent = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCPF] = useState('');
  const [data, setData] = useState('');

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            // backgroundColor: 'red',
          }}
        >
          <TextField
            id="name"
            label="Nome"
            variant="outlined"
            style={{ minWidth: '70%' }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="default"
            style={{ minWidth: '25%', padding: 16 }}
            startIcon={<CloudUpload />}
          >
            Adicionar imagem
          </Button>
        </div>
        <TextField
          id="endereco"
          label="Endereço"
          variant="outlined"
          style={{ minWidth: '80%', padding: 10 }}
          margin="normal"
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          style={{ minWidth: '80%', padding: 10 }}
          margin="normal"
        />
        <TextField
          id="data"
          label="Data de Nascimento"
          variant="outlined"
          style={{ minWidth: '80%', padding: 10 }}
          margin="normal"
        />
      </Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
          // backgroundColor: 'red',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ padding: 10, margin: 10 }}
          startIcon={<DeleteIcon />}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ padding: 10, margin: 10 }}
          endIcon={<Send />}
        >
          Cadastrar
        </Button>
      </div>
    </>
  );
};

export default Newstudent;
