import './App.css';
import {useEffect, useState} from "react";
import datarank from "./photos/datarank.png";

function App() {
    const [width, setwidth]=useState("100%");
    return(
        <div className={"mainbox"}>
            <img src={datarank} width={200}/>
            <div className={"subbox"}>
                <input id={"input"} style={{width: `${width}`}} onInput={()=>{
                    let value=document.getElementById("input").value;
                    setwidth(value===""?"100%":`${50+12*value.length}px`);
                }} onKeyUp={()=>{
                    if(window.event.keyCode === 13) window.location.href="https://wordcloud-gen.run.goorm.io/img/"+encodeURIComponent(document.getElementById("input").value);
                }}/>
                <div className={"btn"} onClick={()=>{
                    window.location.href="https://wordcloud-gen.run.goorm.io/img/"+encodeURIComponent(document.getElementById("input").value);
                }}>검색</div>
            </div>
        </div>
    )
}

export default App;