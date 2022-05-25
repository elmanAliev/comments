import styled from 'styled-components';

export const MyTextarea = styled.textarea`
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
    margin-bottom: 10px;

    :focus {
        outline: none;   
    }
`;