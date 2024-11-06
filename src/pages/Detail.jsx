import { useNavigate } from 'react-router-dom';

export default function Detail() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Detail</p>
            <button onClick={() => navigate('/dex')}>도감 페이지로 돌아가기</button>
        </div>
    );
}
