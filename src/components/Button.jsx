import styled from 'styled-components';

const Container = styled.div`
    ${({ type, background }) => `
        background-color: ${background};
        border-radius: 4px;
        color: #ffffff;
        font-size: ${type === 'main' ? '16px' : '14px'};
        font-weight: ${type === 'main' ? '700' : '500'};
        padding: ${type === 'main' ? '10px 20px' : '5px 10px'};
        cursor: pointer;
    `}
`;

export default function Button({ type = 'main', background, label, handleClick }) {
    return (
        <Container type={type} background={background} onClick={handleClick}>
            {label}
        </Container>
    );
}
