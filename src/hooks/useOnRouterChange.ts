import { useRouter } from "next/router";
import { useEffect } from "react";

const useOnRouterChange = (effect: ()=> void)=> {
    const router = useRouter()
    useEffect(effect, [router.asPath, effect])
};

export default useOnRouterChange;

