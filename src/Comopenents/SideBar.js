import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { SideBarData } from "../Data/SideBar/SideBarData";
import MenuData from "../Data/SideBar/MenuData.json";
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
const SideBarCover = styled.div`
height:100% ;
bottom:0;
position:fixed;
width: ${(props) => props.SideBarCoverWidth};
transition: width 1s;
flex-shrink: 0;
background-color:rgba(0,0,0,.7);
z-index:5;
`;
const Title = styled.div`
margin-top:5px;
margin-bottom:5px;
margin-left:53px;
height:40px;
width: ${(props) => props.width};
text-align:center;
`;
const MenuStyled = styled.div`
position:fixed;
display:flex;
bottom:0;
flex-direction:column;
left:0;
height:calc(100% - 40px);
width: 53px;
flex-shrink: 0;
background-color:#2A2F33;
z-index:6;
`;
const MenuItemsWrapper = styled.div`
display:grid;
grid-template-columns:5px 45px ;
margin-right:.3em;
`;
const MenuItemLogo = styled.div`
height: 35px;
width: 35px;
display :flex;
margin-left:auto;
margin-right:auto;
margin-top:.35em;
margin-bottom:.35em;
background-image: url(${(props) => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 5px; 
font-size: 18px;
font-weight:bold;
cursor:pointer;
${({ disabled }) => disabled && `
opacity: .5;
background-color: grey;
`}
`;
const MenuItemPointer = styled.div`
margin-top:auto;
margin-bottom:auto;
border-radius: 0px 5px 5px 0px;
height: 29px;
width: 5px;
background-color:#F55661;
`;
const SideBarStyled = styled.div`
display:${(props) => props.SideBarDisplay};
position:fixed;
bottom:0;
left:53px;
height:calc(100% - 40px);
width: 200px;
flex-shrink: 0;
background-color:#393D42;
transition: display 2s;
z-index:6;
`;
const SideBarItem = styled.div`
position:relative;
z-index:3;
  color: white;
  margin:0;
  height:40px;
  padding-top:.5em;
  padding-bottom:.1em;
  padding-left:0.1em;
  font-size:1.1em;
  text-decoration:none;
  display:block;
  background-color:${(props) => props.BackgroundColor};
  &:hover{
    cursor: pointer;     
 } 
`;
const ItemTicker = styled.div`
  position:relative ;
  display:${(props) => props.display};
  left:30px;
  bottom:-5px;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #F55661;
`;
const SideBarItemTitle = styled.span`
display:grid;
grid-template-columns:50px 110px auto ;
`;
const Div = styled.div`
 font-size:32px;
 font-weight:300;
 color:Black;
 margin:auto;
 width:100%;
 display:flex;
justify-items:center;
align-content:center;
text-align:center;
 `;
const Div2 = styled.div`
display:flex;
justify-items:center;
align-content:center;
text-align:center
 `;
const Wrapper = styled.div`
 display:flex;
justify-items:center;
align-content:center;
 margin:auto;
 width:auto;
 `;
const ItemContent = styled.div`
padding-top:${(props) => props.padding};
padding-left:1.2em;
height:${(props) => props.height};
overflow:hidden;
background-color:#32363A;
`;
const Li = styled.li`
color:${(props) => props.color};
&:hover{
    cursor: pointer;  
 }
`;
const Ul = styled.ul`
margin:0;
padding-top:.5em;
padding-bottom:.5em;
&:hover{
    cursor: pointer;
    background-color:rgba(255,255,255,.1);
 }
`;
const I = styled.i`
color:${(props) => props.color};
`;
export function SideBar({ open, setOpen, active, setActive }) {
  const [ind, setInd] = useState(2);
  const [ind2, setInd2] = useState(3);
  const [indChild, setChildInd] = useState(1);
  const [tabIndice, setTabIndice] = useState(3);

  function TabClick(x, y) {
    setInd2(x);
    setOpen(false);
    setInd(0);
    setTabIndice(y)
    setChildInd();
  }
  return (
    <>
      <SideBarCover SideBarCoverWidth={!active ? "53px" : "253px"} />
      <Title width={!active ? "0px" : "160px"}><b style={{ "fontWeight": "bolder", "fontSize": "22px" }}>Sociality.</b><span>io</span></Title>
      <MenuStyled>
        {MenuData.map((item, index) => {
          return (
            <MenuItemsWrapper key={index}>
              {active && ind2 == index ? <MenuItemPointer /> : <div />}
              <MenuItemLogo

                onClick={() => { TabClick(index, item.indice); !active || ind2 == index ? setActive(!active) : setActive(active) }}
                disabled={active && ind2 == index ? false : true}
                img={item.path} />
            </MenuItemsWrapper>
          )
        })}
      </MenuStyled>
      <SideBarStyled SideBarDisplay={!active ? "none" : "block"}>

        {SideBarData.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.path} style={{ "textDecoration": "none" }} >
                <SideBarItem
                  BackgroundColor={active && ind == index ? "#F55661" : "inherit"}
                  key={index}
                  onClick={() => { setInd(index); !open || ind == index ? setOpen(!open) : setOpen(open) }}>
                  <SideBarItemTitle>
                    <IconContext.Provider
                      value={active && ind == index ? { color: '#fff' } : { color: '#F55661' }
                      }>
                      <Div2><Wrapper>{item.icon}</Wrapper></Div2>
                    </IconContext.Provider>
                    <Div2><Wrapper>{item.title}</Wrapper></Div2>
                    <Div2> {item.childrens ? <Wrapper><Div>{open && ind == index && item ? "-" : "+"}</Div></Wrapper> : <div />}</Div2>

                  </SideBarItemTitle>
                  <ItemTicker display={active && ind == index ? "block" : "none"} />
                </SideBarItem>
              </Link>
              {item.childrens ? <ItemContent height={open && ind == index && item ? "auto" : "0"}
                padding={open && ind == index && item ? ".25em" : "0"}>
                {
                  item.childrens.map((child, ChildIndex) => {
                    return (
                      <Ul key={ChildIndex}>
                        <Link to={child.path} style={{ "textDecoration": "none" }}>
                          <Li
                            color={indChild == ChildIndex ? "#F55661" : "#fff"}
                            onClick={() => { setChildInd(ChildIndex); }}>
                            {child.title}
                          </Li>
                        </Link>

                      </Ul>
                    )
                  })
                }
              </ItemContent> : ""}
            </div>
          );
        })}
      </SideBarStyled>
    </>
  );
}
