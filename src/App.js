import { useState } from 'react';
import { Container } from './AppStyled';
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'

function App() {

  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpenPopup = () => setIsOpened(true);
  const handleClosePopup = () => {
    setIsOpened(false);
  }


  return (
    <Container>
      <Header handleOpen={handleOpenPopup} />
      {isOpened && <Form handleClose={handleClosePopup} />}
      {/* <button onClick={handleOpenPopup}></button> */}
    </Container>
  );
}

export default App;
