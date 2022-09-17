import { Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation-bar/navigation.component";
import SignIn from "./routes/signin/sign-in.component";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;
