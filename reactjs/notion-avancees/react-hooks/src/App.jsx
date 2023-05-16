// import logo from './logo.svg';
// import './App.css';

import { 
  Card, 
  Col, 
  Container, 
  Row 
} from 'react-bootstrap'
import { 
  Compteur1,
  Compteur2, 
  Compteur3,
  Compteur4,
  Compteur5,
  Compteur6,
  Compteur7,
  Compteur8,
  Compteur9
} from './app/Compteurs';
import { 
  CommentList,
  CustomCompteur1, 
  TodoListUnsingAjax 
} from './app/CustomHooks';

function App() {
  return (
    <Container>
      <Card>
        <h1 className='text-center'>Les Hooks dans React</h1>
      </Card>

      <Row className='text-white'>
        <Col>
          <h2 className='py-2'>le hook useState</h2>
          <Compteur1 />
          <Compteur2 />
          <Compteur3 />
          <Compteur4 />
          <Compteur5 />

          <h2 className='py-2'>Le hook useEffect</h2>
          <Compteur6 />
          <Compteur7 />
          <Compteur8 />
          <Compteur9 />

          <h2 className='py-2'>Création des hooks personnalisés</h2>
          <CustomCompteur1 />
          <TodoListUnsingAjax />
          <CommentList />

        </Col>

        <Col>
          <h2 className='py-2'>Les hooks useMemo et useCallback</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
