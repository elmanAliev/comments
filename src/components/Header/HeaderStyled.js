import styled from 'styled-components';

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #939393;
    min-height: 80px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    color: rgb(145, 145, 145);
`;

export const Button = styled.button`
    width: 200px;
    height: 30px;
    background-color: rgb(145, 145, 145);
    color: white;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    border-radius: 2px;
    border: 0;
    transition: opacity 0.5s linear;
    cursor: pointer;

    :hover{
        opacity: .6;
    }
`;