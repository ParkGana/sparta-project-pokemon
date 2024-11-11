import { toast } from 'react-toastify';

/* 나만의 포켓몬 추가 유효성 검사 */
export function CheckMyPokemons(myPokemons, newPokemon) {
    // 이미 선택된 포켓몬인 경우
    if (myPokemons.find((pokemon) => pokemon.id === newPokemon.id)) {
        toast('이미 선택된 포켓몬입니다.');
        return false;
    }

    // 이미 6개의 포켓몬이 선택된 경우
    if (myPokemons.length === 6) {
        toast('더 이상 선택할 수 없습니다.');
        return false;
    }

    return true;
}
