import React, { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = () => {
    const { children } = props;
    const contextName = "ひろき";
    return (
        <UserContext.provider value={{ contextName }}>
            {children}
        </UserContext.provider>
    )
}