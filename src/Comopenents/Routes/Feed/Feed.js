import React from "react";
import styled from "styled-components";
import { PostGrid } from "./PostGrid";
import { PostGroupContainer } from "./PostGrid";
import { PostsContainer } from "./PostGrid";
import { GroupDate } from "./PostGrid";
import postData from "../../../Data/data.json";
import { Post } from "./PostGrid";
var _ = require('lodash');
const Container = styled.div`
position:fixed;
overflow-y:scroll;
width:${(props)=>props.width};
height:calc(100% - 20px);
padding:20px 7px 20px 40px;
right:0;
top:20px;
`;
const Header = styled.div`
height:70 px;
display:flex;
flex-direction: row;

`;
const SubHeadWrapper = styled.div`
display:flex;
flex-direction:row;
justify-items:center;
align-content:center;
text-align:center;
margin-right:20px;
`;
const Dot  = styled.div`
height: 12px;
width: 12px;
margin: auto 8px auto 8px;
background-color:${(props)=>props.backColor} ;
border-radius: 50%;
display: inline-block;
`;
const Text = styled.div`
font-size:16px;
font-weight:600;
color:#393D42 !important;
`;

//Post Elements later to be transfered to PostGrid

const SideBanner = styled.div`
color:white;
background-image:url(${(props=>props.imgUrl)});
background-position: center;
background-repeat: no-repeat;
position:relative;
background-color:${(props)=>props.backColor};
background-size: 20px;
width:30px;
padding-top:5px;
text-align:center;
transition-duration: .2s;
border-radius : 7px 0px 0px 7px;

`;
const PostContent = styled.div`
display:flex;
flex-direction:column;
`;
const PostHeader = styled.div`
display:grid;
grid-template-columns:1fr .5fr ;
margin-left:7px;
`;
const PostDate = styled.div`
position:relative;
left:7px;
top:10px;
color:#999999;
font-weight:900;
font-size:13px;
`;
const PostOptions = styled.div`
position:relative;
display:flex;
flex-direction:row;
right:1px;
top:5px;
`;
const Icon = styled.div`
height: 20px;
width: 20px;
display :flex;
align-items:center;
justify-element:center;
background-image:url(${(props)=>props.imgUrl});
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

const PostText = styled.div`
font-size:14px;
color:gray;
margin-top:20px;
margin-left:15px;
font-weight:600;
`;
const PostPicture = styled.div`
width:230px;
height: 200px;
text-align:center;
margin:10px auto 10px auto;
font-size:20px;
background-image: ${({img})=> `url(${img});`}
background-position: center;
background-size: cover ;
transition-property: box-shadow margin-top filter;
transition-duration: .2s;
border:.5px solid;
border-color: lightgray; 
border-radius : 5px;
box-shadow : 0px 0px 1px 0px grey;
padding-bottom: 10x;

`;
const PostFooter = styled.div`
display:flex;
flex-direction:row;
margin-left:20px;
margin-bottom:20px;
`;

const Counter = styled.div`
font-size:12px;
margin:auto 5px auto 5px;

`;



export function Feed({open,active}){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const statusArr = ["#F7BF38","#3AC183","#3AC183","#bbb","#FB6450"];

    return(
        <>
        <Container width={open ||active ? "calc(100% - 300px)":"calc(100% - 70px)"}>
            <Header>
                <SubHeadWrapper><Dot backColor ={"#bbb"}/> <Text>Published</Text></SubHeadWrapper>
                <SubHeadWrapper><Dot backColor ={"#3AC183"}/> <Text>Scheduled</Text></SubHeadWrapper>
                <SubHeadWrapper><Dot backColor ={"#F7BF38"}/> <Text>Need Approval</Text></SubHeadWrapper>
                <SubHeadWrapper><Dot backColor ={"#FB6450"}/> <Text>Error</Text></SubHeadWrapper>
                <SubHeadWrapper><Dot backColor ={"#67B1F2"}/> <Text>Notes</Text></SubHeadWrapper>
            </Header>
            <PostGrid>
                     {Object.keys(postData.posts_by_date).map((item , index)=>{
                      return(
                        <PostGroupContainer key={index}>
                            <GroupDate>{new Date(item).getDate()+" "+months[new Date(item).getMonth()]+" "+new Date(item).getFullYear()} </GroupDate>
                            <PostsContainer>
                                 {postData.posts_by_date[item].map((element,ex)=>{
                                    return(
                                        <Post>
                                            <SideBanner 
                                            imgUrl={"/img/"+element.account.channel+".png"}
                                            backColor={statusArr[element.status]} />
                                           <PostContent>
                                              <PostHeader>
                                                 <PostDate>{new Date(element.created_at).getDate()+" "+months[new Date(element.created_at).getMonth()]+" "+new Date(element.created_at).getFullYear()+" - "+new Date(element.created_at).getHours()+":"+new Date(element.created_at).getMinutes()}</PostDate>
                                                 <PostOptions>
                                                    <Icon imgUrl={"/img/hide.png"} />
                                                    <Icon imgUrl={"/img/delete.png"} />
                                                    <Icon imgUrl={"/img/menu.png"} />
                                                 </PostOptions>
                                              </PostHeader>
                                             <PostText>
                                                {element.entry.message}
                                             </PostText>
                                             <PostPicture img={element.entry.image[0]}></PostPicture>

                                             <PostFooter>
                                                <Icon  imgUrl={"/img/like.png"} /> <Counter>0</Counter>
                                                <Icon  imgUrl={"/img/comment.png"} /> <Counter>0</Counter>
                                                <Icon  imgUrl={"/img/share.png"} /> <Counter>0</Counter>
                                                <Icon  imgUrl={"/img/view.png"} /> <Counter>0</Counter>
                                             </PostFooter>
                                            </PostContent> 
                                        
                                        </Post>
                                    )
                                 })}
                            </PostsContainer>
                        </PostGroupContainer>
                      )
                               
    
                           
                     
                     })}
            </PostGrid>
        </Container>
        </>
    )
}