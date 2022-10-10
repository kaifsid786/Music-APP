import React from "react";
import "./Header.css";
import img from "../MainComp/Images/child-2321161_1920.png";
export default function Header(){
    return(
        <>
           <div className="h">
               <div className="h-left">
                   <div className="h-logo">
                      <img src={img} alt="" />
                      <h3>MusicWeb</h3>
                   </div>
               </div>
               <div className="h-right">
                    <div className="signup">SignUP</div>
                    <div className="login">Login</div>
               </div>
           </div>
        </>
    );
}