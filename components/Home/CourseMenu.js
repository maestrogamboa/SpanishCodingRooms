import React, { useEffect, useState } from 'react';
import styled from "styled-components";


const Container = styled.div`
	grid-area: menu;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
`;


const CourseMenu = () => {
  const [courseMenu, setCourseMenu] = useState([])

  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:5000/menu`, {mode: 'cors'});
    data = await response.json();
    setCourseMenu(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Container>
     {courseMenu.map((idx, course) => (
      <h1 key={idx}>{course}</h1>
     ))}
    </Container>
    </>
    
  )
}

export default CourseMenu
