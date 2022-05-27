import { useState } from 'react';
import { Container, CommentList } from './AppStyled';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { arrayOfComments } from './utils/dataComments'
import { Comment } from './components/Comment/Comment'

function App() {

  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([...arrayOfComments]);

  const handleOpenPopup = () => setIsOpened(true);
  const handleClosePopup = () => setIsOpened(false);

  const handleAddComment = (newComment) => setComments(prev => [newComment, ...prev]);

  return (
    <Container>
      <Header handleOpen={handleOpenPopup} />
      {isOpened && <Form handleClose={handleClosePopup} onAddComment={handleAddComment} />}
      <CommentList>
        {comments.map((comment) => {
          return <Comment
            name={comment.name}
            avatar={comment.avatar}
            text={comment.text}
            date={comment.date}
            key={comment.date}
          />
        })}
      </CommentList>
    </Container>
  );
}

export default App;
