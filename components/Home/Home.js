import React from 'react'
import styled from "styled-components";
import CourseContent from "./CourseContent";
import CourseMenu from "./CourseMenu";
import Header from "./Header";
import Instructions from './Instructions';

const Container = styled.div`
	max-width: 100%;
    max-height: 100%;
    margin: 0;
`;
const Layout = styled.div`
    margin: 0;
	display: grid;
	grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #DADEDF;
  padding: 5px;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`;

const Home = () => {
    return (
        <Container>
            <Layout>
                <Header />
                <CourseMenu />
                <CourseContent />
                <Instructions/>
            </Layout>
        </Container>
    )
}

export default Home
