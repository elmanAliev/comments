import styled from 'styled-components';
import closeButton from '../../images/close.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const FormComment = styled.form`
    width: 430px;
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    padding: 36px;
    box-sizing: border-box;
    position: relative;
`;

export const FormCloseButton = styled.button`
    width: 32px;
    height: 32px;
    background-image: url(${closeButton});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right: -40px;
    top: -40px;
    border: 0;
    transition: all 0.3s linear;
    cursor: pointer;

    :hover{
        opacity: .6;
    }
`;
