import styled from 'styled-components';
import PokemonBall from './PokemonBall';
import PokemonCard from './PokemonCard';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #ff0000;
    text-align: center;
    margin-bottom: 20px;
`;

const BallContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    overflow: scroll;
`;

export default function Dashboard({ myPokemons, handleDelete }) {
    return (
        <Container>
            <Title>나만의 포켓몬</Title>
            <BallContainer>
                {myPokemons.map((pokemon) => {
                    return <PokemonCard key={pokemon.id} type={'my'} pokemon={pokemon} handleDelete={handleDelete} />;
                })}
                {[...Array(6 - myPokemons.length)].map(() => {
                    return <PokemonBall key={uuid()} />;
                })}
            </BallContainer>
        </Container>
    );
}
