import styled from 'styled-components'

export const NavUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 500px) {
        display: none;
    }
  
`;
