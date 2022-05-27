import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {

                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;

                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;

                default:
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if(isEmpty || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, emailError]);

    return {
        isEmpty,
        emailError,
        inputValid,
    }
}