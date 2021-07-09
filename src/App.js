
import './_app.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
          <div className="app__container">
             <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
             <Container fluid className="app__main ">
                <HomeScreen />
          </Container>
          </div>
    </>
  );
}

export default App;
