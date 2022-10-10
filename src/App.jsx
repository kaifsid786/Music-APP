import React from "react";
import "./App.css";
import MainComp from "./MainComp/MainComp";
import Search from "./Search/Search";
import Playlist from "./Playlist/Playlist";
import Cplay from "./CreatePlaylist/Cplay";
import {Routes,Route} from "react-router-dom";
import { useState } from "react";
export default function App(){

  const [home,setHome]=useState(true);
  const [search,setSearch]=useState(true);
  const [play,setPlay]=useState(true);
  const [crpl,setCrpl]=useState(true);

    return(
        <>
        <Routes>
          <Route exact path='/' element={<MainComp home={home}/>}/>
          <Route exact path='/search' element={<Search search={search}/>}/>    
          <Route exact path='/playlist' element={<Playlist Play={play}/>}/>    
          <Route exact path='/Crplaylist' element={<Cplay CrPl={crpl}/>}/>    
        </Routes>

        </>
    );
}