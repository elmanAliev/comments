import { Wrapper, Overlay, FormComment, CloseButton, Input, Textarea, SubmitButton, Error } from './FormStyled';
import { useInput } from '../../hooks/useInput';

export const Form = ({ handleClose, onAddComment }) => {

    const name = useInput('', {isEmpty: true})
    const email = useInput('', {isEmpty: true, isEmail: true})
    const avatar = useInput('')
    const text = useInput('', {isEmpty: true})
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const date = new Date();
        onAddComment({ 
            name: name.value,
            email: email.value,
            avatar: avatar.value,
            text: text.value,
            date,
        });
        handleClose();
    }

    return (
        <Wrapper>
            <Overlay onClick={handleClose} />
            <FormComment>
                <CloseButton onClick={handleClose} type='button' />
                {(name.isDirty && name.isEmpty) && <Error>Поле не может быть пустым:</Error>}
                <Input
                    placeholder={'Имя'}
                    name={'name'}
                    type='text'
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                />
                {(email.isDirty && email.isEmpty) && <Error>Поле не может быть пустым:</Error>}
                {(email.isDirty && email.emailError) && <Error>Некорректный e-mail:</Error>}
                <Input
                    placeholder={'E-mail'}
                    type='email'
                    name={'email'}
                    value={email.value}
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                />
                <Input
                    placeholder={'Ссылка на аватар'}
                    type='url'
                    name={'avatar'}
                    value={avatar.value}
                    onChange={e => avatar.onChange(e)}
                    onBlur={e => avatar.onBlur(e)}
                />
                {(text.isDirty && text.isEmpty) && <Error>Поле не может быть пустым:</Error>}
                <Textarea
                    placeholder={'Комментарий'}
                    type='text'
                    name={'text'}
                    value={text.value}
                    onChange={e => text.onChange(e)}
                    onBlur={e => text.onBlur(e)}
                />
                <SubmitButton 
                    onClick={handleSubmitForm}
                    disabled={!name.inputValid || !email.inputValid || !text.inputValid}
                >
                    Отправить комментарий
                </SubmitButton>
            </FormComment>
        </Wrapper>
    );
}
