import { useState } from 'react';
import { Container } from './AppStyled';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { arrayOfComments } from './utils/dataComments'

function App() {

  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([...arrayOfComments]);

  const handleOpenPopup = () => setIsOpened(true);
  const handleClosePopup = () => setIsOpened(false);
  
  const handleAddComment = (newComment) => setComments([...comments, newComment]);

  console.log(comments)
  return (
    <Container>
      <Header handleOpen={handleOpenPopup} />
      {isOpened && <Form handleClose={handleClosePopup} onAddComment={handleAddComment} />}
    </Container>
  );
}

export default App;
