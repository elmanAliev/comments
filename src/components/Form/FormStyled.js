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

export const CloseButton = styled.button`
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

    :focus {
        outline: none;   
    }
`;

export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    height: 27px;
    border: 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000;
    margin-bottom: 15px;

    :focus {
        outline: none;   
    }
`;

export const Textarea = styled.textarea`
    font-family: inherit;
    width: 100%;
    height: 127px;
    border: 0;
    border: 1px solid rgba(0,0,0,.2);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000;
    margin-bottom: 20px;
    margin-top: 15px;
    border-radius: 4px;

    :focus {
        outline: none;   
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: rgb(45, 45, 45);
    color: white;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 4px;
    transition: opacity 0.2s linear;
    border: 0;
    cursor: pointer;

    :hover {
        opacity: 0.6;
    }
    
`;