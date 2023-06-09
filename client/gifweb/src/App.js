import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { GifCard } from './components/gifCard';

function App() {
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    const getGifList = async () => {
      try {
        const res = await axios.get('http://localhost:5600/gif/items');
        setGifList(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getGifList();
  }, []);
  return (
    <div className="App">
      <h1>Gif Web in progress</h1>
      <form>
        <input type="text" placeholder="Add gif url"></input>
        <button type="submit">Add Gif</button>
      </form>
      <div className="gifCards">
        {gifList?.map((gifIntput) => (
          <GifCard gif={gifIntput}></GifCard>
        ))}
      </div>
    </div>
  );
}

export default App;
