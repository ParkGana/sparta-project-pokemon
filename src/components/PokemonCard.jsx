import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    padding: 10px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
`;

const Character = styled.img`
    width: 100px;
`;

const Name = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #000000;
`;

const Description = styled.p`
    font-size: 14px;
    color: #666666;
`;

export default function PokemonCard({ type = 'list', pokemon }) {
    const navigate = useNavigate();

    const { handleAdd, handleDelete } = useContext(PokemonContext);

    /* 카드 내 버튼 클릭 이벤트 */
    const handleClick = (e) => {
        // 이벤트 버블링 방지
        e.stopPropagation();

        type === 'list' ? handleAdd(pokemon) : handleDelete(pokemon);
    };

    return (
        <Container onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <Character src={pokemon.img_url} />
            <Name>{pokemon.korean_name}</Name>
            <Description>No. {String(pokemon.id).padStart(3, '0')}</Description>
            <Button type="sub" bgcolor="red" label={type === 'list' ? '추가' : '삭제'} handleClick={handleClick} />
        </Container>
    );
}
