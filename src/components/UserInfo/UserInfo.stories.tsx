import React from "react";
import UserInfo from ".";
import { SegmentGroup, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "User Info Story",
	component: UserInfo,
};

const PlayerAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_Shiba_Inu.jpg/64px-A_Shiba_Inu.jpg";

export const GameListStory = () => (
    <SegmentGroup>
        <Segment>
            <UserInfo userName="Ol' Smelly" userAvatar={PlayerAvatar}/>
        </Segment>
        <Segment>
            <UserInfo userName="Spot" userAvatar={PlayerAvatar}/>
        </Segment>
    </SegmentGroup>
);
