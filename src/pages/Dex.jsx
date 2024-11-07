import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../Data';
import { useState } from 'react';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px;
`;

export default function Dex() {
    const [myPokemons, setMyPokemons] = useState([]);

    const handleAdd = (data) => {
        if (myPokemons.find((pokemon) => pokemon.id === data.id)) {
            window.alert('이미 선택된 포켓몬입니다!');
        } else if (myPokemons.length === 6) {
            window.alert('포켓몬은 최대 6개까지 선택할 수 있어요!');
        } else {
            setMyPokemons([...myPokemons, data]);
        }
    };

    const handleDelete = (data) => {
        setMyPokemons([...myPokemons.filter((pokemon) => pokemon.id !== data.id)]);
    };

    return (
        <Wrap>
            <Dashboard data={myPokemons} handleDelete={handleDelete} />
            <PokemonList data={MOCK_DATA} handleAdd={handleAdd} />
        </Wrap>
    );
}
