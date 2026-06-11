import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";_
import { useSetRecoilState } from "recoil";

import { SecondarButton } from "../atoms/button/SecondarButton";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
    const history = useHistory();
    // const { serUserInfo } = useContext(UserContext);
    const serUserInfo = useSetRecoilState(userState);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        history.push("/users");
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        history.push("/users");
    }
    return (
        <Scontainer>
            <h2>Topページです</h2>
            <SecondarButton onClick={onClickAdmin}>管理者ユーザー</SecondarButton>
            <br />
            <br />
            <SecondarButton onClick={onClickGeneral}>一般ユーザー</SecondarButton>
        </Scontainer>
    )
}

const Scontainer = styled.div`
    text-align: center;
`