import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px;
`;

export default function Dex() {
    return (
        <Wrap>
            <Dashboard />
            <PokemonList />
        </Wrap>
    );
}
