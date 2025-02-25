import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";
import { Title } from "./components/title";
import { Explanation } from "./components/title";
import { Date } from "./components/title";

// const dummyData = {
//   copyright: "Stephen Kennedy ",
//   date: "2023-06-14",
//   explanation: "There is no sea on Earth large enough to contain the Shark nebula. This predator apparition poses us no danger as it is composed only of interstellar gas and dust. Dark dust like that featured here is somewhat like cigarette smoke and created in the cool atmospheres of giant stars. After being expelled with gas and gravitationally recondensing, massive stars may carve intricate structures into their birth cloud using their high energy light and fast stellar winds as sculpting tools.  The heat they generate evaporates the murky molecular cloud as well as causing ambient hydrogen gas to disperse and glow red.  During disintegration, we humans can enjoy imagining these great clouds as common icons, like we do for water clouds on Earth. Including smaller dust nebulae such as Lynds Dark Nebula 1235 and Van den Bergh 149 & 150, the Shark nebula spans about 15 light years and lies about 650 light years away toward the constellation of the King of Aethiopia (Cepheus).",
//   hdurl: "https://apod.nasa.gov/apod/image/2306/Shark_Kennedy_4176.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "The Shark Nebula",
//   url: "https://apod.nasa.gov/apod/image/2306/Shark_Kennedy_960.jpg"
//   }

function App() {

const [data, setData]= useState(" ");
const [date, setDate]= useState("2023-06-14");
const changeHandler = (event)=>{
  console.log(event.target.value);
  setDate(event.target.value);
}

  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=2ocOd9elGJ89y6JeGUos2pgg2MFIsIOj2YkpsYXi&date="+date)
         .then(res=>{
          setData(res.data)
    })

  },[date]);

  return (
    <div className="App">
      <input type="date" value={date} onChange={changeHandler}/>
      <Title>{data.title}</Title>
      {data.media_type === "image"
      ? <Image dataurl = {data.url}/>
      :<Youtube dataurl={data.url}/>}
      <Explanation>
        {data.explanation}
      </Explanation>
      <Date>
        {data.date}
      </Date>
    </div>
  );
}

export default App;
