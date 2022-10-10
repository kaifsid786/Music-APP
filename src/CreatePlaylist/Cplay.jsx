import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Cplay.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import Card from "../MainComp/Body/Card/Card";
export default function Playlist(props){
    var text,file;
    function getText(event){
     text = event.target.value;
   }

  async function save(){
    var url;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
  
      if(text === "") 
       url = "https://shazam.p.rapidapi.com/search?term="+`romantic`+"&locale=en-US&offset=0&limit=5";
      else
       url = "https://shazam.p.rapidapi.com/search?term="+`${text}`+"&locale=en-US&offset=0&limit=5";
  
  
      const res= await fetch(url,options);
      let data = await res.json();
    
      const actData = data.tracks;
      if(actData === undefined){
        alert("No data found / Api limit exceeded");
      }
      else{
          
        ReactDOM.render(
            <Card img={actData.hits[0].track.images.background} title={actData.hits[0].track.title} artist={actData.hits[0].track.subtitle} src={actData.hits[0].track.hub.actions[1].uri} />,
             document.getElementById("Cp-result")
        )


         file ={
             img:actData.hits[0].track.images.background,
             title:actData.hits[0].track.title,
             artist:actData.hits[0].track.subtitle,
             src:actData.hits[0].track.hub.actions[1].uri
        }

         const key = localStorage.length;
          localStorage.setItem(key,JSON.stringify(file));
          alert("Song Has Been Saved !!");
      }
  }


    return(
        <>
         <div className="main">
            <div className="Cp">
               <div className="input-box">
                   <input type="text" className="text-search" placeholder="Search Music" onChange={getText} />
                   <AddCircleIcon className="s-icon" fontSize="large" sx={{color:"white"}} onClick={save}/>
               </div>     
               <div className="Cp-result" id="Cp-result">
                    <h1 style={{color:"gray"}}>Create Your Playlist Here !!!!!!<br />
                    Search The song and click on Add icon to save ..
                    </h1>
               </div>
            </div>
            <Header />
            <SideBar crpl={props.CrPl}/>
         </div>
        </>
    )
}