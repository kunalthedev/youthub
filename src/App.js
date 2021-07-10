import "./_app.scss";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CategoriesBar from "./Components/CategoriesBar/CategoriesBar";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <CategoriesBar />
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/search">
        <Layout>
          <h1>search</h1>
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
