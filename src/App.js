import { Routes, Route} from "react-router-dom";
import Home from './views/Home/'
import  TwitterPage  from "./views/twitter/index.js"
import DiscordPage from "./views/discord"
import VerifiedPage from "./views/verified"
import  About  from "./views/about"
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <div className="App">
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path = "twitter" element={<TwitterPage/>}/>
            <Route path="Discord" element={<DiscordPage />} />
            <Route path="verified" element = {<VerifiedPage/>} />
      </Routes>
      </Layout>
    </div>

    </>
  );
}

export default App;
