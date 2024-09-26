import React, {useEffect} from "react"

export default function useScrollToTop(){
    useEffect(()=> {
        
        const topbutton = document.getElementById("topbutton");
        topbutton.addEventListener("click", () =>{
            window.scrollTo({top:0, behavior:"smooth"});
        });
        
    }
)
}
