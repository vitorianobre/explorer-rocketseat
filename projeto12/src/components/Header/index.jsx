import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="http://github.com/vitorianobre.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Vitoria Nobre</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}