import styled,{createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`


html {
    scroll-behavior: smooth;
}
    
`;

export const Container = styled.div`
    z-index:1;
    width:100%;
    max-width:1440px;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and(max-width:991px) {
        padding-right:30px;
    padding-left:30px;
    }
`;

export const Button = styled.button `
    border-radius:4px;
    background: var(--H1Color);
    
    white-space:nowrap;
    padding: 12px 20px 13px;
gap: 10px;
    
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.3s ease-out;

    &:hover {
         color:#07356B; 
  box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
  transition: all 0.2s ease;
    }

    
`;


export default GlobalStyle