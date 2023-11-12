import React from "react";

const Main=(props)=>{

if (props.completed===true){
    var url="../images/true.png"
}else{
    var url="../images/false.png"
}
return(
    <div className="card" >
    <h3 className="contain--title">{props.title}</h3>
    <img src={url} className="img--logo"></img>
    </div>
)
}
export default Main;