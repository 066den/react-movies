import { BrowserRouter } from "react-router-dom";
import "./global.scss";
import MainLayout from "./layouts/Main";
import Content from "./layouts/Content";

const App = () => {
  return (
    <BrowserRouter basename="/react-movies">
      <MainLayout>
        <Content />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
