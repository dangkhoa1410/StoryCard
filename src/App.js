import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {useEffect, useState} from 'react'

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
  const [color,setColor] = useState('black')

  const clickHandler = e => {
    e.preventDefault();
    setColor(e.target.id)
  }


  const EnterHandler = e => {
    if(e.target.className === 'p-2 col-md-5 col-sm-12 m-1 mb-5'){
      e.target.style.border = `1px solid ${e.target.id}`
      e.target.style.boxShadow = `3px 3px ${e.target.id}`
    }
    
  }
  const LeaveHandler = e => {
    if(e.target.className === 'p-2 col-md-5 col-sm-12 m-1 mb-5'){
      e.target.style.border = `none`
      e.target.style.boxShadow = `none`
    }
  }

  const titleStyle = {
    color: color
  }


  return (
    <div className="container App">
      <h1 style={titleStyle}>Title</h1>
      <div className='row flex'>
      {
        data.map((item) => {
          return <div id ={item.color} 
                      onMouseEnter={EnterHandler} 
                      onMouseLeave={LeaveHandler}  
                      className="p-2 col-md-5 col-sm-12 m-1 mb-5">
                  <Card data={item} clickHandler={clickHandler}></Card>
                </div>
        })
      }
      </div>
    </div>
  );
}

export default App;
