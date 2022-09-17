import React from "react";
import styled from "styled-components";



export const PostGrid = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:auto;
margin-bottom:50px;
`;

export const PostGroupContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
width:auto;
height:auto;
`;
export const GroupDate= styled.div`
color:#999999;
font-weight:900;
font-size:18px;
`;
export const PostsContainer = styled.div`
display:grid;
grid-template-columns:300px 300px 300px ;
column-gap: 23px;
row-gap:20px;
width:auto;
padding:5px;
margin-top:10px;
margin-bottom:10px;
height:auto;
@media(max-width: 1200px){ 
    grid-template-columns:300px 300px  ;
   
  }
  @media(max-width: 700px){ 
    grid-template-columns:1fr  ;
   
  }
`;
export const Post = styled.div`
display:grid;
grid-template-columns:25px auto ;
border:0.5px solid;
width:300px;
border-color: lightgray; 
border-radius : 10px;
box-shadow : 0px 0px 1px 0px grey;
`;