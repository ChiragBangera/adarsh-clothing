import { Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation-bar/navigation.component";





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
