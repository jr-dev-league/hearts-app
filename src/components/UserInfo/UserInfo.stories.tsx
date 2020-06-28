import React from "react";
import UserInfo from ".";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "User Info Story",
	component: UserInfo,
};

export const GameListStory = () => (
    <Container>
    <UserInfo userName="Ol' Smelly"/>
    <UserInfo userName="Spot"/>
    </Container>
);
