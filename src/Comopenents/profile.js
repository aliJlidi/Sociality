import styled from "styled-components";
export const Profil = styled.div`
height: 50px;
width: 50px;
position:fixed;
right:60px;
top:20px;
display :flex;
align-items:center;
justify-element:center;
background-image:url(${(props) => props.imgUrl});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius:50%; 
margin:3px;
z-index:8;
font-size: 18px;
font-weight:bold;
 &:hover{
    cursor: pointer;
    opacity:0.7;
 }
`;