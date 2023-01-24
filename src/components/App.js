import '../styles/reset.css';
import '../styles/index.css';

import Header from './Header/Header';
import { useEffect, useState } from 'react';
import { getUser } from '../utils/fetch.js';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(12)
      setUser(data)
      console.log(data);

    }
    fetchData()
      
  }, [])
  console.log(user);

  return (
    <div id="app">
      <Header />
      {user && user.userInfos.firstName}
    </div>
  );
}

export default App;
