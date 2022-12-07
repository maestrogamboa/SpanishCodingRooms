import React from 'react'
import styled from "styled-components";

const Container = styled.div`
	grid-area: header;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: left;
	margin-top: -10px;
    padding: 0;
    font-size: 10px;
`;
const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	height: 100%;
	max-width: 1128px;
`;

const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
	}
`;


const Header = () => {
  return (
    <Container>
        <h1>Nav</h1>
    </Container>
  )
}

export default Header
