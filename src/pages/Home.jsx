import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LogoImage from '../assets/logo.png';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.img`
    width: 90vw;
    max-width: 600px;
`;

export default function Home() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Logo src={LogoImage} alt="logo" />
            <Button bgcolor="red" label="포켓몬 도감 시작하기" handleClick={() => navigate('/dex')} />
        </Wrap>
    );
}
