import React from "react";
import ReactDOM from "react-dom";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import SearchIcon from '@mui/icons-material/Search';
import Card from "../MainComp/Body/Card/Card";
import "./Search.css"
import { useState } from "react";

export default function Search(props){

  const [res,setRes] = useState(false);

  // API Calling Function ---------------------------------------------------------------->
  const getText= async (event,i)=>{

    var add=event.target.value,url;


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    if(add === "") 
     url = "https://shazam.p.rapidapi.com/search?term="+`romantic`+"&locale=en-US&offset=0&limit=5";
    else
     url = "https://shazam.p.rapidapi.com/search?term="+`${add}`+"&locale=en-US&offset=0&limit=5";


    const res= await fetch(url,options);
    let data = await res.json();
    
   const actData = data.tracks;

   if(actData === undefined){
      document.getElementById("result").innerHTML="No Data Found / Api limit exceeded!";
   }
   else{
    ReactDOM.render(
      <>
      <Card img={actData.hits[0].track.images.background} title={actData.hits[0].track.title} artist={actData.hits[0].track.subtitle} src={actData.hits[0].track.hub.actions[1].uri} />
      <Card img={actData.hits[1].track.images.background} title={actData.hits[1].track.title} artist={actData.hits[1].track.subtitle} src={actData.hits[1].track.hub.actions[1].uri} />
      <Card img={actData.hits[2].track.images.background} title={actData.hits[2].track.title} artist={actData.hits[2].track.subtitle} src={actData.hits[2].track.hub.actions[1].uri} />
      </>,
      document.getElementById("result")
    )
   }

   

  }
    //  -------------------------------------------------------------------------------------------->

    return(
        <>
          <div className="main">
            <div className="search">
               <div className="input-box">
                   <input type="text" className="text-search" placeholder="Search Music" onChange={getText}/>
                   <SearchIcon className="s-icon" fontSize="large" sx={{color:"white"}} />
               </div>
               <div className="result" id="result">
                  <h1 id="text" style={{color:"rgb(66, 65, 65)"}}>Search Your Music Here !!</h1>
               </div>
            </div>
            <Header />
            <SideBar search={props.search} />
          </div>
        </>
    )
}






// document.getElementsByClassName("card-img-top").src=data.tracks.hits[num].track.images.background;
// document.getElementById("data-title").innerHTML= data.tracks.hits[num].track.title;
// document.getElementById("data-artist").innerHTML="Artist : "+data.tracks.hits[num].track.subtitle;
// document.getElementById("data-src").src= data.tracks.hits[num].track.hub.actions[1].uri;