import React from "react";
import "./Body.css";


export default function Body(){
    return(
        <>
            <div className="b">
                 <div className="b-RP">
                     <h1>Romantic Playlist</h1>
                       <div className="b-wrap" id="b-wrap">
                       </div>
                 </div>
                 <div className="b-FP">
                      <h1>Your's Favourite</h1>
                      <h3>Nothing lies inside your favourite list !</h3>
                      
                 </div>
                 <div className="b-SP" id="b-SP">
                      <h1>Sad Playlist</h1> 
                      <div id="b-SP-wrap" className="b-wrap">
                        </div>                      
                 </div>
            </div>
        </>
    );
}