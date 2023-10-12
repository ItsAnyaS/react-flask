import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [members, setMembers] = useState([])

  async function getMembers() {
    let req = await fetch('/members')
    let res = await req.json()
    console.log(res.members)
    setMembers(res.members)
  }
  useEffect(()=> {
    getMembers()
  }, [])
  return (
    <div className="App">
      {
       (typeof members === 'undefined') ? ( <p>Loading</p>): members.map((member, i) => <p key={i}>{member}</p>)
      }
    </div>
  );
}

export default App;
