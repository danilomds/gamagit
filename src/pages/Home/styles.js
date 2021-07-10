import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  margin: .5rem;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
`;

export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #ff0000;
  font-weight: 600;
  margin-top: 1rem;
`;
