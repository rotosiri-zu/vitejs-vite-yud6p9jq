import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = () => {
    const { children } = props;

    const [userInfo, setUserInfo] = useState(null);

    return (
        <UserContext.provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.provider>
    )
}