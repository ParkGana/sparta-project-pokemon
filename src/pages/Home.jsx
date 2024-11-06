import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Home</p>
            <button onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</button>
        </div>
    );
}
