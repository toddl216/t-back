import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const url = "https://treasure-f7ac3-default-rtdb.asia-southeast1.firebasedatabase.app/problems.json"

function App() {
  const get_ans = () => {
    axios.get(url).then((response) => {(alert(JSON.stringify(response)))})
  }
  get_ans()
  return (
    <div className="App">
    </div>
  );
}

export default App;
