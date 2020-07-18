import React from "react";
import UserInfo from ".";
import { Container, SegmentGroup, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "User Info Story",
	component: UserInfo,
};

const PlayerAvatar1 =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_Shiba_Inu.jpg/64px-A_Shiba_Inu.jpg";
const PlayerAvatar2 =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg/64px-2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg";

export const UserInfoStory = (): JSX.Element => {
	return (
		<Container>
			<SegmentGroup>
				<Segment>
					<UserInfo userName="Ol' Smelly" userAvatar={PlayerAvatar1} />
				</Segment>
				<Segment>
					<UserInfo userName="Spot" userAvatar={PlayerAvatar2} />
				</Segment>
			</SegmentGroup>
		</Container>
	);
};
