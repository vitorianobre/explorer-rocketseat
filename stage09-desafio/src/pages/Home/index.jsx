import { Container, Content, Section } from './styles';

import { FiPlus } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieReview } from '../../components/MovieReview';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <Container>
            <Header />

            <Section>
                <h2>Meus filmes</h2>
                <Link to="/create">
                    <Button
                    icon={FiPlus}
                    title="Adicionar filme"/>
                </Link>
            </Section>
            <Content>
                <MovieReview data={{
                    title:"Interestellar",
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional',
                    rating: 2,
                    tags:[
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                    ]
                }} />

                <MovieReview data={{
                    title:"Interestellar",
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional',
                    rating: 2,
                    tags:[
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                    ]
                }} />
            </Content>
        </Container>
    );
}