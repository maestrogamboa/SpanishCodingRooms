import React from 'react'
import styled from "styled-components";
import { render } from 'react-dom'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
    console.log("Change, newValue");
}

const Container = styled.div`
	grid-area: right;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
`;

const Instructions = styled.div`
	grid-area: right;
    background-color: blue;
`;

const Layout = styled.div`
	display: grid;
	grid-template-areas: "left main";
    grid-template-columns: minmax(0, 3fr) minmax(0, 12fr) ;
	column-gap: 25px;
	row-gap: 25px;
	margin: 25px 0;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`;

const CourseContent = () => {
    return (
        <Container>
            <AceEditor
            mode="java"
            theme="github"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
        />
        </Container>
        




    )
}

export default CourseContent
