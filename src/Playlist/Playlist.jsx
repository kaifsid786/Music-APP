import React from "react";
import ReactDOM from "react-dom";
import "./Playlist.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Card from "../MainComp/Body/Card/Card";
export default function Playlist(props){

window.addEventListener("load",()=>{

        var key = localStorage.length-1;var arr=[];
            for(var i=key;i>=0;i--){       
            const obj = JSON.parse(localStorage.getItem(key));
                arr[i]={
                    img:obj.img,
                    title:obj.title,
                    artist:obj.artist,
                    src:obj.src
                }
                key--;
            }
            if(arr.length != 0){
                ReactDOM.render(
                    <>
                    <h1>Your Playlist</h1>
                    <div className="array">
                    {arr.map((value)=>{
                       return(
                        <>
                        <Card img={value.img} title={value.title} artist={value.artist} src={value.src} />
                        </>
                       )
                    })
                }
                </div>
                    </>,
                     document.getElementById("p-result")
                )
            
             document.getElementById("h1").style.visibility="hidden";

            }

})

    return(
        <>
         <div className="main">
            <div className="p">
                 <h1 style={{color:"darkgray"}} id="h1">You don't have any Playlist Currently !</h1>
                  <div className="p-result" id="p-result">
                       
                  </div>
            </div>
            <Header />
            <SideBar play={props.Play}/>
         </div>
        </>
    )
}