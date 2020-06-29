import React from "react";
import { Image } from "semantic-ui-react";

interface Props {
    userName: string;
    userAvatar: string;
}

const UserInfo: React.FC<Props> = ( { userName, userAvatar } ) => {
    return (
        <div>
            <Image avatar src={ userAvatar } alt="user avatar"/>
            <span>{ userName }</span>
        </div>
    )
};

export default UserInfo;
