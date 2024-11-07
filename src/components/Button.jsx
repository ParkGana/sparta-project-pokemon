import styled from 'styled-components';

const Container = styled.div`
    ${({ type, $bgcolor }) => `
        background-color: ${$bgcolor};
        border-radius: 4px;
        color: #ffffff;
        font-size: ${type === 'main' ? '16px' : '14px'};
        font-weight: ${type === 'main' ? '700' : '500'};
        padding: ${type === 'main' ? '10px 20px' : '5px 10px'};
        cursor: pointer;
    `}
`;

export default function Button({ type = 'main', bgcolor, label, handleClick }) {
    return (
        <Container type={type} $bgcolor={bgcolor} onClick={handleClick}>
            {label}
        </Container>
    );
}
