import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
`;

export default function PokemonList({ pokemons, handleAdd }) {
    return (
        <Container>
            {pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} handleAdd={handleAdd} />;
            })}
        </Container>
    );
}
