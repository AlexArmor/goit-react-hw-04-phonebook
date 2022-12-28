import styled from 'styled-components';

export const Item = styled.li`
margin-bottom: 15px;
font-size: 20px;
`;

export const BtnDeleteItem = styled.button`
margin-left: 10px;
border-radius: 5px;
padding: 4px;
cursor: pointer;
&:hover{
    background-color: orange;
}
&:focus{
    background-color: #ff4800;
}
`;