import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');

  const getSampleText = () => {
    // axios.get('').then((res) =>
    //   console.log(res));
  }

  useEffect(()=>{
    getSampleText();
  }, []);

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
