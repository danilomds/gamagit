import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, List, ListItem, LinkHome } from './styles';

export function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  return (
    <Container>
      <Title>Repositórios</Title>
      <List>
        {repositories.map(repository => {
          return (
            <ListItem>Repositório: {repository}</ListItem>
          );
        })};
      </List>
      <LinkHome to="/">Voltar</LinkHome>
    </Container>
  );
};
