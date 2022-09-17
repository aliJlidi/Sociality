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
export const GroupDate = styled.div`
color:#999999;
font-weight:900;
font-size:18px;
`;
export const PostsContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr ;
column-gap: 23px;
row-gap:20px;
width:auto;
padding:5px;
margin-top:10px;
margin-bottom:10px;
height:auto;
@media(max-width: 1200px){ 
    grid-template-columns:1fr 1fr ;  
  }
  @media(max-width: 700px){ 
    grid-template-columns:1fr  ;
  }
`;
export const Post = styled.div`
display:grid;
grid-template-columns:25px auto ;
border:0.5px solid;
width:auto;
border-color: lightgray; 
border-radius : 10px;
box-shadow : 0px 0px 1px 0px grey;
`;
export const SideBanner = styled.div`
color:white;
background-image:url(${(props => props.imgUrl)});
background-position: center;
background-repeat: no-repeat;
position:relative;
background-color:${(props) => props.backColor};
background-size: 20px;
width:30px;
padding-top:5px;
text-align:center;
transition-duration: .2s;
border-radius : 7px 0px 0px 7px;
`;
export const PostContent = styled.div`
display:flex;
flex-direction:column;
`;
export const PostHeader = styled.div`
display:grid;
grid-template-columns:1fr .5fr ;
margin-left:7px;
`;
export const PostDate = styled.div`
position:relative;
left:7px;
top:10px;
color:#999999;
font-weight:900;
font-size:13px;
`;
export const PostOptions = styled.div`
position:relative;
display:flex;
flex-direction:row;
right:1px;
top:5px;
`;
export const Icon = styled.div`
height: 20px;
width: 20px;
display :flex;
align-items:center;
justify-element:center;
background-image:url(${(props) => props.imgUrl});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: none; 
margin:3px;
font-size: 18px;
font-weight:bold;
 &:hover{
    cursor: pointer;
    opacity:0.7;
 }
`;
export const PostText = styled.div`
font-size:14px;
color:gray;
margin-top:20px;
margin-left:15px;
font-weight:600;
`;
export const PostPicture = styled.img`
width:230px;
height: 200px;
text-align:center;
margin:10px auto 10px auto;
font-size:20px;
transition-property: box-shadow margin-top filter;
transition-duration: .2s;
border:.5px solid;
border-color: lightgray; 
border-radius : 5px;
box-shadow : 0px 0px 1px 0px grey;
padding-bottom: 10x;
`;
export const PostFooter = styled.div`
display:flex;
flex-direction:row;
margin-left:20px;
margin-bottom:20px;
`;
export const Counter = styled.div`
font-size:12px;
margin:auto 5px auto 5px;
`;