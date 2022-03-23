import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main";
import Loader from "./Components/Loader/Loader";
import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : <Main />}
    </div>
  );
}

export default App;
