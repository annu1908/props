import React, { useState } from "react"

function App()

{
  const[city,setCity]=useState("ktl");
  const user={
    name:"Annu",
    bio:"Front end developer "
  }
  let age=25;
  function sayhello(){
    console.log("hello from app")
  }
  function updateCity(){
    setCity("kuk");
  }
  return(
    <div>
    <Hero userDetails={user}  
      marvel={age} fnc={sayhello}
      name={name}
      city={city}
      updateCity={updateCity}/>
    </div>
  )
}
export default App
function Hero({userDetails,marvel,fnc,city,updateCity}){
  return(
    <div>
      <h1>Hero,{marvel}</h1>
      <p>City:{city}</p>
      <Card data={userDetails} updateCity={updateCity}/>
      <button onClick={()=>fnc()}>Say hello</button>
    </div>
  )
}
function Card({data,updateCity}){
  return(
    <>
    <h1>name:{data.name}</h1>
    <p>bio:{data.bio}</p>
    <button onClick={updateCity}>Update City</button>
    </>
  )
}