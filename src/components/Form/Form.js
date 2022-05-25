import { Wrapper, Overlay, FormComment, FormCloseButton } from './FormStyled';

export const Form = ({handleClose}) => {



    return (
        <Wrapper>
            <Overlay onClick={handleClose}/>
            <FormComment>
                <FormCloseButton onClick={handleClose} type='button'/>
                <input />
            </FormComment>
        </Wrapper>
    );
}
