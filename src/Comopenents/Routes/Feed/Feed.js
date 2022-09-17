import React from "react";
import styled from "styled-components";
import { PostGrid } from "./PostGrid";
import { PostGroupContainer } from "./PostGrid";
import { PostsContainer } from "./PostGrid";
import { GroupDate } from "./PostGrid";
import postData from "../../../Data/data.json";
import { Post } from "./PostGrid";
import {
    SideBanner, PostContent, PostHeader, PostDate, PostOptions,
    Icon, PostText, PostPicture, PostFooter, Counter
} from "./PostGrid";
const Container = styled.div`
position:fixed;
overflow-y:scroll;
width:${(props) => props.width};
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
const Dot = styled.div`
height: 12px;
width: 12px;
margin: auto 8px auto 8px;
background-color:${(props) => props.backColor} ;
border-radius: 50%;
display: inline-block;
`;
const Text = styled.div`
font-size:16px;
font-weight:600;
color:#393D42 !important;
`;
export function Feed({ open, active }) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const statusArr = ["#F7BF38", "#3AC183", "#3AC183", "#bbb", "#FB6450"];
    return (
        <>
            <Container width={open || active ? "calc(100% - 300px)" : "calc(100% - 70px)"}>
                <Header>
                    <SubHeadWrapper><Dot backColor={"#bbb"} /> <Text>Published</Text></SubHeadWrapper>
                    <SubHeadWrapper><Dot backColor={"#3AC183"} /> <Text>Scheduled</Text></SubHeadWrapper>
                    <SubHeadWrapper><Dot backColor={"#F7BF38"} /> <Text>Need Approval</Text></SubHeadWrapper>
                    <SubHeadWrapper><Dot backColor={"#FB6450"} /> <Text>Error</Text></SubHeadWrapper>
                    <SubHeadWrapper><Dot backColor={"#67B1F2"} /> <Text>Notes</Text></SubHeadWrapper>
                </Header>
                <PostGrid>
                    {Object.keys(postData.posts_by_date).map((item, index) => {
                        return (
                            <PostGroupContainer key={index}>
                                <GroupDate>{new Date(item).getDate() + " " + months[new Date(item).getMonth()] + " " + new Date(item).getFullYear()} </GroupDate>
                                <PostsContainer>
                                    {postData.posts_by_date[item].map((element, ex) => {
                                        return (
                                            <Post key={ex}>
                                                <SideBanner
                                                    imgUrl={"/img/" + element.account.channel + ".png"}
                                                    backColor={statusArr[element.status]} />
                                                <PostContent>
                                                    <PostHeader>
                                                        <PostDate>{new Date(element.created_at).getDate() + " " + months[new Date(element.created_at).getMonth()] + " " + new Date(element.created_at).getFullYear() + " - " + new Date(element.created_at).getHours() + ":" + new Date(element.created_at).getMinutes()}</PostDate>
                                                        <PostOptions>
                                                            <Icon imgUrl={"/img/hide.png"} />
                                                            <Icon imgUrl={"/img/delete.png"} />
                                                            <Icon imgUrl={"/img/menu.png"} />
                                                        </PostOptions>
                                                    </PostHeader>
                                                    <PostText>
                                                        {element.entry.message}
                                                    </PostText>

                                                    <PostPicture src={element.entry.image[0]}
                                                        onError={({ currentTarget }) => {
                                                            currentTarget.onerror = null;
                                                            currentTarget.src = "/img/notFound.png";
                                                        }}
                                                    />
                                                    <PostFooter>
                                                        <Icon imgUrl={"/img/like.png"} /> <Counter>0</Counter>
                                                        <Icon imgUrl={"/img/comment.png"} /> <Counter>0</Counter>
                                                        <Icon imgUrl={"/img/share.png"} /> <Counter>0</Counter>
                                                        <Icon imgUrl={"/img/view.png"} /> <Counter>0</Counter>
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