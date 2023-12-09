import { useEffect } from "react"

/** 
 * Set all anchor element target to self having same origin href 
*/
const useResolveSelfTargets = ()=> {
    useEffect(()=> {
        if(window == undefined) return;
        document.querySelectorAll('a').forEach(ele=>{
            if(ele.href.startsWith(window.location.origin) || ele.href.startsWith("/"))
                ele.target = "_self";
        });
    }, []);
}

export default useResolveSelfTargets;