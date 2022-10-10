import React, { useRef , useState } from "react";
import  "./Card.css";
import romPlay from "../romPlay.js";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { height } from "@mui/system";
export default function Latest(props){

    const audioElm = useRef();

    return(
        <>
           <div className="song">
                 <div class="card" style={{width:"15vw",height:"24rem",marginRight:"1rem"}}>
                   <img src={props.img} class="card-img-top" alt="..."/>
                   <div class="card-body">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">Artist: {props.artist}</p>
                      <audio src={props.src} className="play-pause" ref={audioElm}  controls></audio>
                    </div>
                </div>
           </div>
        </>
    )
}