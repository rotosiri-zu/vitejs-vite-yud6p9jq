import React, { useContext } from "react";
import style from "styled-components";
import { UserContext } from "../../../providers/UserProvider"

export const UserIconWithName = (props) => {
    const { src, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    console.log(context);

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = style.div`
    text-align: center;
`
const SImg = style.img`
    border-radius: 50%;
`
const SName = style.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`