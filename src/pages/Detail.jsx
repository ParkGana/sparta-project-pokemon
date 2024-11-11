import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import MOCK_DATA from '../Data';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckMyPokemons } from '../functions/checkMyPokemons';
import { addPokemon, deletePokemon } from '../redux-toolkit/slices/pokemonSlice';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const Character = styled.img`
    width: 200px;
`;

const Name = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #ff0000;
`;

const Description = styled.p`
    font-size: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export default function Detail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();

    const { myPokemons } = useSelector((state) => state.pokemon);

    const [pokemon, setPokemon] = useState();
    const [label, setLabel] = useState('');

    useEffect(() => {
        setPokemon(MOCK_DATA.find((item) => item.id === Number(param.id)));
    }, [param.id]);

    useEffect(() => {
        const isAdd = myPokemons.length && !!myPokemons.find((item) => item.id === Number(param.id));
        setLabel(isAdd ? '삭제' : '추가');
    }, [myPokemons, param.id]);

    /* 페이지 내 버튼 클릭 이벤트 */
    const handleClick = () => {
        label === '추가' ? CheckMyPokemons(myPokemons, pokemon) && dispatch(addPokemon({ pokemon })) : dispatch(deletePokemon({ pokemon }));
    };

    return (
        <>
            {pokemon && (
                <Wrap>
                    <Character src={pokemon.img_url} alt="character" />
                    <Name>{pokemon.korean_name}</Name>
                    <Description>
                        타입 :{' '}
                        {pokemon.types.map((type, index) => {
                            return index < pokemon.types.length - 1 ? `${type}, ` : type;
                        })}
                    </Description>
                    <Description>{pokemon.description}</Description>
                    <ButtonContainer>
                        <Button bgcolor="red" label={label} handleClick={handleClick} />
                        <Button bgcolor="black" label="뒤로 가기" handleClick={() => navigate('/dex')} />
                    </ButtonContainer>
                </Wrap>
            )}
        </>
    );
}
