import { useNavigate } from 'react-router-dom';

export default function Dex() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Dex</p>
            <button onClick={() => navigate('/detail/1')}>상세 페이지로 이동하기</button>
        </div>
    );
}
