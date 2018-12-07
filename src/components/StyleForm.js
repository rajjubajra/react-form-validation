import styled from 'styled-components';

const Form = styled.form`
   width: 400px;

   align-item: center;
   padding: 30px;

   > label{
     font-size: 1rem;
     display:block;
     margin-top: 5px;
     padding: 5px 0px;
   }

   > input, select, button{
     display: block;
     padding: 5px 0px;
     font-size: 1rem;
     margin-bottom: 10px;
     border: 1px solid #ccc;
   }

   > button {
     padding: 6px 30px;
     margin-top: 5px;
     cursor: pointer;
   }
`;



export default Form;
