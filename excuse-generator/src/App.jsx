import { useState } from 'react'
import Axios from 'axios';
import './App.css'


function App() {
  const [getExcuse, setgetExcuse] = useState("");

  const getNewExcuse = (excuse) => {
  
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setgetExcuse(res.data[0].excuse)
  });
  }

return (
   
        <div className='App'> 
        <h1> Generate a Excuse</h1>
<button onClick={() => getNewExcuse("party")}> Party</button>     
<button onClick={() => getNewExcuse("family")}> Family</button>
<button onClick={() => getNewExcuse("office")}> Office</button>
                      <h2>{getExcuse}</h2>
        </div>
       
  )
}

export default App
