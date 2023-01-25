import '../styles/reset.css';
import '../styles/index.css';
import {Routes, Route} from "react-router-dom"


import Layout from '../pages/Layout/Layout';
import Default from './Default/Default';
import Home from './Home/Home';


function App() {

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/user/:id" element={<Layout><Home /></Layout>} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
