import styled from 'styled-components';
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useState } from 'react';
import { PokemonContext } from './context/PokemonContext';

const Toast = styled(ToastContainer)`
    .Toastify__toast {
        background-color: #ffbe57;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #000000;
        text-align: center;
        padding: 10px 20px;
    }
`;

function App() {
    const [myPokemons, setMyPokemons] = useState([]);

    /* 나만의 포켓몬 추가 이벤트 */
    const handleAdd = useCallback(
        (data) => {
            // 이미 선택된 포켓몬인 경우
            if (myPokemons.find((pokemon) => pokemon.id === data.id)) {
                toast('이미 선택된 포켓몬입니다.');
            }
            // 이미 6개의 포켓몬이 선택된 경우
            else if (myPokemons.length === 6) {
                toast('더 이상 선택할 수 없습니다.');
            } else {
                setMyPokemons([...myPokemons, data]);
            }
        },
        [myPokemons]
    );

    /* 나만의 포켓몬 삭제 이벤트 */
    const handleDelete = useCallback(
        (data) => {
            setMyPokemons([...myPokemons.filter((pokemon) => pokemon.id !== data.id)]);
        },
        [myPokemons]
    );

    return (
        <PokemonContext.Provider value={{ myPokemons, handleAdd, handleDelete }}>
            <Toast position="top-center" autoClose={2000} closeButton={false} hideProgressBar />
            <Router />
        </PokemonContext.Provider>
    );
}
export default App;
