import { Container } from './styles';
import { Tag } from '../Tag';
import { Rating } from '../Rating';

export function MovieReview({data, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Rating grade={data.rating} isBigSize={false} />

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                       data.tags.map(tag => <Tag title={tag.name} key={tag.id} />) 
                    }
                </footer>
            }
        </Container>
    );
}