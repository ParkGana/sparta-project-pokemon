import styled from 'styled-components';
import Router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    return (
        <>
            <Toast position="top-center" autoClose={2000} closeButton={false} hideProgressBar />
            <Router />
        </>
    );
}
export default App;
