import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0; 
  background: #24292e;
  color: #fff;
  padding: .5rem;
  border-radius: .2rem;

`;

export const LinkHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.7rem; 
  background: #30a54c;
  color: #FFF;
  transition: filter 0.2s;
  border-radius: .2rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
