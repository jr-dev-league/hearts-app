import React from "react";
import { Label } from "semantic-ui-react";

interface Props {
	userName: string;
}

const UserInfo: React.FC<Props> = ( {userName} ) => {
    return (
    <Label as='a' image>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='avatar'/>
        { userName }
    </Label>)
};

export default UserInfo;
