import React from "react";


const Nav=()=>{
   return(
   <div className="nav">
   <img src="../images/logo.png" className="nav--logo"></img>
   <section className="nav--inputs">
   <img src="../images/avatar.png" id="nav--avatar" ></img>
   <input type="text" placeholder="ENTER YOUR NAME" ></input>
   <input type="submit" value={"Submit"}  id="nav--submit"></input>
   </section>
   </div>
   )
}
export default Nav;