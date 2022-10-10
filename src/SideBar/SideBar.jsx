import React, { useState } from "react";
import "./SideBar.css";
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export default function SideBar(props){

    return(
        <>
           <div className="s">
               <div className="s-items">
                   <div className={ props.home ? "s-home active"  :"s-home"}>
                      <HouseIcon sx={{color:"white"}} fontSize="large"/> 
                      <a href="/#/" classname="s-diff">Home</a>
                   </div>
                   <div className={ props.search ? "s-search active" : "s-search"}>
                       <SearchIcon fontSize="large" id="s-search"/> 
                       <a href="/#/search" classname="s-diff" >Search</a>
                    </div>
                   <div className="s-fav">
                         <StarOutlineIcon fontSize="large"/> 
                         <a classname="s-diff">Favourites</a> 
                   </div>
                   <div className={props.play ? "s-playlist active" :"s-playlist"}>
                         <QueueMusicIcon fontSize="large"/> 
                         <a href="/#/playlist" classname="s-diff" >PlayList</a>
                   </div>
                   <div className={props.crpl?"s-addplist active" :"s-addplist"}>
                        <AddCircleOutlinedIcon fontSize="large"/> <a href="/#/Crplaylist" classname="s-diff">Create Playlist</a>
                   </div>
               </div>
           </div>
        </>
    );
}