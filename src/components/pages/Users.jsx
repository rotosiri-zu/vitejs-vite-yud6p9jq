import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
    id: val,
    name: `ひろき-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
    }
}));

export const Users = () => {
    return (
        <Scontainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map(() => (
                    <UserCard key={users.id} user={user} />
                ))}
            </SUserArea>
        </Scontainer>
    )
}

const Scontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`