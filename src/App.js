import { useState } from 'react';
import { Container } from './AppStyled';
import { Form } from './components/Form/Form'

function App() {

  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpenPopup = () => setIsOpened(true);
  const handleClosePopup = () => {
    console.log(1)
    setIsOpened(false);

  }


  return (
    <Container>
      {isOpened && <Form handleClose={handleClosePopup} />}
      <button onClick={handleOpenPopup}></button>
    </Container>
  );
}

export default App;
