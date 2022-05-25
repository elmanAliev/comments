import { Wrapper, Title, Button } from './HeaderStyled';

export const Header = ({handleOpen}) => {



    return (
        <Wrapper>
            <Title>Комментарии</Title>
            <Button onClick={handleOpen}>Добавить комментарий</Button>
        </Wrapper>
    );
}