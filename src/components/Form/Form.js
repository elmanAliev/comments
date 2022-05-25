import { useState } from 'react';
import { Wrapper, Overlay, FormComment, CloseButton, Input, Textarea, SubmitButton } from './FormStyled';

export const Form = ({handleClose, onAddComment}) => {

    const [comment, setComment] = useState({name: '', email: '', avatar:'', text: ''});

    const addComment = (e) => {
        e.preventDefault();
        onAddComment(comment);
        handleClose();
        setComment({});
    }

    return (
        <Wrapper>
            <Overlay onClick={handleClose}/>
            <FormComment>
                <CloseButton onClick={handleClose} type='button'/>
                <Input
                    placeholder={'Имя'}
                    name={'name'}
                    type='text'
                    onChange={e => setComment({...comment, name: e.target.value})}
                    value={comment.name}
                />
                <Input 
                    placeholder={'E-mail'}
                    type='email'
                    name={'email'}
                    onChange={e => setComment({...comment, email: e.target.value})}
                    value={comment.email}
                />
                <Input 
                    placeholder={'Ссылка на аватар'}
                    type='url'
                    name={'avatar'}
                    onChange={e => setComment({...comment, avatar: e.target.value})}
                    value={comment.avatar}
                />
                <Textarea 
                    placeholder={'Комментарий'}
                    type='url'
                    name={'text'}
                    onChange={e => setComment({...comment, text: e.target.value})}
                    value={comment.text}
                />
                <SubmitButton onClick={addComment}>Отправить комментарий</SubmitButton>               
            </FormComment>
        </Wrapper>
    );
}
