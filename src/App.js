import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {useState} from 'react'

function App() {
  const data = [
    {
      title: 'Test1',
    content: 'Lorem is sum ls ar sl mf as d',
    color: 'red'
    },
    {
      title: 'Test2',
    content: 'Lorem is sum ls ar sl mf as d',
    color: 'blue'
    },
    {
      title: 'Test3',
    content: 'Lorem is sum ls ar sl mf as d',
    color: 'green'
    },
    {
      title: 'Test4',
    content: 'Lorem is sum ls ar sl mf as d',
    color: 'gray'
    },
  ]

  const clickHandler = e => {
    e.preventDefault();
    setColor(e.target.id)
  }

  const [color,setColor] = useState('black')

  const titleStyle = {
    color: color
  }

  return (
    <div className="container App">
      <h1 style={titleStyle}>Title</h1>
      <div className='row flex'>
      {
        data.map((item) => {
          return <Card data={item} clickHandler={clickHandler}></Card>
        })
      }
      </div>
    </div>
  );
}

export default App;
