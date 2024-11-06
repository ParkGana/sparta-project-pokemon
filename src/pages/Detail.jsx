import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

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

export default function Detail() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Character src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="character" />
            <Name>잠만보</Name>
            <Description>타입 : 노말</Description>
            <Description>노말 타입의 포켓몬으로, 큰 몸집과 느긋한 성격을 가집니다.</Description>
            <Button label="뒤로 가기" background="black" handleClick={() => navigate('/dex')} />
        </Wrap>
    );
}
