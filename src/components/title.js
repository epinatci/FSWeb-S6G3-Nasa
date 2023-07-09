import styled from "styled-components"

export const Title = styled.h1 ` 
color:red; 
&:hover {color:blue};
&:before {content:"title: "}`

export const Explanation = styled.p `
font-size:1.5rem ;
color: darkgray;
line-height: 150%;
`

export const Date = styled.p `
font-size:1rem ;
color: azure; 
background-color: yellow;
`