import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Body from "./Body/Body";

 export default function MainComp(props){
    return(
        <>  
        <div className="main">
            <Body />
            <Header />
            <SideBar home={props.home} />
            </div>
        </>
    )
 }