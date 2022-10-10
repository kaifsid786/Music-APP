import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card/Card";
import sadPlay from "./sadPlay";


window.addEventListener("load",async ()=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
      const url = "https://shazam.p.rapidapi.com/search?term="+`romantic`+"&locale=en-US&offset=0&limit=5";
      const res= await fetch(url,options);
      let data = await res.json();

      const actData=data.tracks;

      if(actData != undefined){
         
         ReactDOM.render(
            <>         
                 <Card img={actData.hits[0].track.images.background} title={actData.hits[0].track.title} artist={actData.hits[0].track.subtitle} src={actData.hits[0].track.hub.actions[1].uri} />
                 <Card img={actData.hits[1].track.images.background} title={actData.hits[1].track.title} artist={actData.hits[1].track.subtitle} src={actData.hits[1].track.hub.actions[1].uri} />
                 <Card img={actData.hits[2].track.images.background} title={actData.hits[2].track.title} artist={actData.hits[2].track.subtitle} src={actData.hits[2].track.hub.actions[1].uri} />
                 <Card img={actData.hits[3].track.images.background} title={actData.hits[3].track.title} artist={actData.hits[3].track.subtitle} src={actData.hits[3].track.hub.actions[1].uri} />
                 <Card img={actData.hits[4].track.images.background} title={actData.hits[4].track.title} artist={actData.hits[4].track.subtitle} src={actData.hits[4].track.hub.actions[1].uri} />
            </> , 
            document.getElementById("b-wrap")
         )
      }

    sadPlay();
      
})