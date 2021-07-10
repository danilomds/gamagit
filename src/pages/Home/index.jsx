import { useState } from 'react';
import axios from 'axios';
import { Container, Content, Input, Button, Image, ErrorMsg } from './styles';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setError(false);
        history.push('/repositories');
      }).catch((err) => {
        setError(true);
      });
  };

  return (
    <Container>
      <Content>
        <Image src="assets/logo-git.svg" alt="logoGit" />
        <Input
          type="text"
          placeholder=" Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />

        <Button id="btn" onClick={handleSearch} >Pesquisar</Button>
      </Content>
      {error ? <ErrorMsg>Ocorreu um erro! Tente novamente.</ErrorMsg> : ''}
    </Container>
  );
};