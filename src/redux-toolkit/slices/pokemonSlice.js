import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myPokemons: []
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        /* 나만의 포켓몬 추가 */
        addPokemon: (state, action) => {
            state.myPokemons = [...state.myPokemons, action.payload.pokemon];
        },

        /* 나만의 포켓몬 삭제 */
        deletePokemon: (state, action) => {
            state.myPokemons = [...state.myPokemons.filter((pokemon) => pokemon.id !== action.payload.pokemon.id)];
        }
    }
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
