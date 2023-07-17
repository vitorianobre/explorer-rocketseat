import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/vitorianobre.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            id='avatar' 
                            type="file" 
                        />
                    </label>
                </Avatar>

                <Input icon={FiUser} placeholder="Vitoria Nobre" type="text" />
                <Input icon={FiMail} placeholder="vitorianobre@alu.ufc.br" type="text" />
                <Input icon={FiLock} placeholder="Senha atual" type="password" />
                <Input icon={FiLock} placeholder="Nova senha" type="password" />

                <Button title="Salvar" disabled />
            </Form>
        </Container>
    );
}