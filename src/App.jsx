import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./Components/Routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.Id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
