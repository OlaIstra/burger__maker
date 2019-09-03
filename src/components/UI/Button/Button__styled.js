import styled from 'styled-components'



const Button = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: none; 
    
    &:disabled {  
        background-color: #ccc;
        color: white;
    }
    
    &:hover:disabled {  
        background-color: #ccc;
        color: white;
        cursor: not-allowed;
    }

`;

export const ButtonMore = styled(Button)`
    padding: 0px;
  background-color: #95e1d3;
  color: white;
  
  &:hover {  
        background-color: white;
        color: #95e1d3;
    }
    
  & .MuiSvgIcon-root {
    width: 50px;
    height: 50px;
    font-size: 50px;
    margin: -1px    
  }  
`;

export const ButtonLess = styled(Button)`
    padding: 0px;
  background-color: #f38181;
  color: white;
  
  &:hover {  
        background-color: white;
        color: #f38181;
    }
  & .MuiSvgIcon-root {
    width: 50px;
    height: 50px;
    font-size: 50px;
    margin: -1px
    
  }
    
`;

export const OrderBtn = styled(Button)`   
    
    width: 80px;
    height: 60px;
    outline: none;
    cursor: pointer;
    color: #95e1d3
    font-family: inherit;
    padding: 10px;
    border: none;
    background-color: transparent;

    &:hover, &:active {        
        color: #95e1d3;
        animation: enable 0.3s linear;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: #ccc;
    }
    
    &:hover:disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: #ccc;
    }

    &:not(:disabled) {
        animation: enable 0.3s linear;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    
    & .MuiSvgIcon-root {
        font-size: 50px;
    }
    
`

export const ModalBtn = styled(Button)`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
`


export const ContinueBtn = styled(ModalBtn)`
    color: #5C9210;
`

export const CancelBtn = styled(ModalBtn)`
    color: #944317;
`
