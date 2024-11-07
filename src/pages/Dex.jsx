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

    /* 나만의 포켓몬 추가 이벤트 */
    const handleAdd = (data) => {
        // 이미 선택된 포켓몬인 경우
        if (myPokemons.find((pokemon) => pokemon.id === data.id)) {
            window.alert('이미 선택된 포켓몬입니다!');
        }
        // 이미 6개의 포켓몬이 선택된 경우
        else if (myPokemons.length === 6) {
            window.alert('포켓몬은 최대 6개까지 선택할 수 있어요!');
        } else {
            setMyPokemons([...myPokemons, data]);
        }
    };

    /* 나만의 포켓몬 삭제 이벤트 */
    const handleDelete = (data) => {
        setMyPokemons([...myPokemons.filter((pokemon) => pokemon.id !== data.id)]);
    };

    return (
        <Wrap>
            <Dashboard myPokemons={myPokemons} handleDelete={handleDelete} />
            <PokemonList pokemons={MOCK_DATA} handleAdd={handleAdd} />
        </Wrap>
    );
}
