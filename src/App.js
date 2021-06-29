import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const data = {
    title: 'Test',
    content: 'Lorem is sum ls ar sl mf as d',
    color: 'red'
  }

  const clickHandler = e => {
    e.preventDefault();
    console.log(e.target.id)
  }

  return (
    <div className="container App">
      <h1>Title</h1>
      <Card data = {data} clickHandler = {clickHandler}></Card>
      <Card data = {data}></Card>
      <Card data = {data}></Card>
      <Card data = {data}></Card>
    </div>
  );
}

export default App;
