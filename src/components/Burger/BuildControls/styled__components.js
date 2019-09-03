import styled from 'styled-components'

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  margin: auto;
  padding: 10px
  
  overflow: auto;
  text-align: center;
  background-color: #fce38a;
  color: white;
  
  box-shadow: 10px 10px 10px #ccc;
  
  @media(min-width: 1000px) and (min-height: 700px) {
    width: 700px;
  }
  
  @media(min-width: 500px) and (min-height: 401px) {
    width: 450px;
  }
  
  @media(min-width: 500px) and (min-height: 400px) {
    width: 350px;
  }
  
`;

