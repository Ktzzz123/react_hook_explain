import io from 'socket.io-client'
import './App.css';
import {useEffect,useState} from 'react'


const socket = io.connect("http://localhost:3001")
function App() {
  const [message, setMessage] = useState("");
  const [messageRecived,setMessageRecived]=useState("")


  const sendMessage = ()=>{
    socket.emit("send_message", {message})
  }

  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      setMessageRecived(data.message)
    });
  },[])

  return (
    <div className = "App">
        <input onChange={(e)=>{
          setMessage(e.target.value)
        }} placeholder="Message..."/>
        <button onClick={sendMessage}>Send Message</button>
        <h1>Message:</h1>
        {messageRecived}
    </div>
  );
}

export default App;
