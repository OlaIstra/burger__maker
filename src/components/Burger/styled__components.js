import styled from 'styled-components'

export const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 300px;
  overflow: auto;
  text-align: center;
  
  @media(min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
  
  @media(min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  
  @media(min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  
`;
