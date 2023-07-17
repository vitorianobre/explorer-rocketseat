import { Container, Content, Section } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Create() {
    return (
        <Container>
            <Header />

            <Content>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>
                
                <h2>Novo filme</h2>

                <div>
                    <Input placeholder="Título" type="text"/>
                    <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                </div>

                <TextArea placeholder="Observações" />

                <section>
                    <h3>Marcadores</h3>

                    <Section>
                        <MovieItem value="React" />
                        <MovieItem isNew placeholder="Novo marcador" />
                    </Section>
                </section>

                <div className="buttons">
                    <Button title="Excluir filme" isDelete />
                    <Button title="Salvar alterações" />
                </div>
            </Content>
        </Container>
    )
}