import './App.css';
import SearchComponent from './components/SearchComponent';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const response = await axios.get('https://dummyjson.com/products')
      // console.log(response.data.products);
      setData(response.data.products);
    }
    getData();
  },[]);

  return (
    <Container className="App">
      <SearchComponent data={data}/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(transparent,rgba(0,0,0,0.7));
  background-color: #3284e8;
  display: flex;
  align-items: center;
  justify-content: center;
`