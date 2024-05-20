import Input from "./Components/Input";
import {useState} from 'react'
import Image from "./Components/Image";
import './App.css'


function App() {
  const [dataInput,setDataInput] =useState('');
  const [sizeInput,setSizeInput] =useState('')
  const [img,setImg]=useState()
  const [loading,setLoading]=useState(false)
  return (
   <>
   <div className="app-container">
   <Image img={img} loading={loading}/>
   <Input dataInput={dataInput} setDataInput={setDataInput} sizeInput={sizeInput} setSizeInput={setSizeInput} setImg={setImg} setLoading={setLoading} img={img}/>
   </div>
   </>
   
  );
}

export default App;
