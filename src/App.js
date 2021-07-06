
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_container">
        <Sidebar/>
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
