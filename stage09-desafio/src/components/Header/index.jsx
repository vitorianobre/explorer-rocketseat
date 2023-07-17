import { Container, Profile } from './styles';

import { Link } from 'react-router-dom';
import { Input } from '../Input'

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título" />
            <Profile>
                <Link className='perfil' to="/profile">Vitoria Nobre</Link>
                <a className='sair' href="">sair</a>
                <Link to="/profile">
                    <img src="https://github.com/vitorianobre.png" alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    );
}