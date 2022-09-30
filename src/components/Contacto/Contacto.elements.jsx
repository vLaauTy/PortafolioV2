import styled from "styled-components";

export const ContactoContainer = styled.section`
  background: var(--BlueColor);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: auto;
  width: 100%;
  z-index: 1;
`;

export const ContactoWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.7rem;
`;

export const Form = styled.form`
  height: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding:2rem;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #bdebea;
  border-radius: 6px;
  height: 48px;
  padding-left: 20px;
  padding-top: 5px;
  background: transparent;
  color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #919b9b;
  }
`;

export const TextArea = styled.textarea`
  max-width: 100%;
  min-height: 8rem;
  height: 100%;
  max-height: 20rem;
  padding-left: 20px;
  padding-top: 17px;
  gap: 10px;
  border: 1px solid #bdebea;
  border-radius: 6px;
  background: transparent;
  box-sizing: border-box;
  overflow: hidden;
  resize: none;
  color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #919b9b;
  }
`;
 export const ButtonSend=styled.button`
    border-radius: 6px;
    text-decoration:none;
  background: var(--H1Color);
  color: #252728;
  white-space: nowrap;
  padding: 12px 20px;
gap: 10px;
  width:100%;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
  outline: none;
  border: none;
  transition: all 0.3s ease-out;
  cursor: pointer;

margin:0;
text-align:center;

  &:hover {
    color: #07356b;
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    transition: all 0.2s ease;
  }
  @media screen and (max-width:600px) {
    font-size: 12px;
    padding: 0.6rem;
  }
 `;

 export const AlertaCampo=styled.small`
 margin-top:5px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
    text-align:right;
    color: #C05353;
 `;

 export const MessageSucces=styled.div`
 border-radius: 20px;
  padding: 1rem;
    text-Align:center;
    color: "#fff";
    font-Weight: bold;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
 `;