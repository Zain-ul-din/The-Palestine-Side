import { useState, useEffect } from 'react';

type PaginationState = "next" | "prev" | "both" | "none"

interface UsePaginationMetaData 
{
    totalPages: number,
    currPage: number,
    state: PaginationState
}

export const usePagination = <T>(
   data: Array<T>,
   itemsPerPage: number
): [T[], ()=> void, ()=> void, ()=> void, UsePaginationMetaData] =>  {
    const [activeIdx, setActiveIdx] = useState<number>(1)
    const [paginationState, setPaginationState] = useState<PaginationState>("both")
    
    useEffect(()=> {
        const totalPages = Math.ceil(data.length / itemsPerPage)
        setActiveIdx(idx => idx >= totalPages ? totalPages:idx) // clamp idx
        if(totalPages <= 1) setPaginationState("none")
        else if(activeIdx === 1) setPaginationState("next")
        else if(activeIdx === totalPages) setPaginationState("prev")
        else setPaginationState("both")
    }, [activeIdx, data, itemsPerPage])

    const getPageData = ()=> {
        const startIdx = (activeIdx - 1) * itemsPerPage;
        const lastIdx = startIdx + itemsPerPage
        return data.slice(startIdx, lastIdx)
    }

    const getTotalPages = () => Math.ceil(data.length / itemsPerPage);

    
    const nextPage = ()=> {
        if(activeIdx > getTotalPages()) return;
        setActiveIdx(idx => idx + 1)
    }

    const prevPage = ()=> {
        if(activeIdx <= 1) return;
        setActiveIdx(idx => idx - 1)
    }

    const reset = ()=> {
        setActiveIdx(1)
    }
    
    return [getPageData(), nextPage, prevPage,reset, {
        totalPages: getTotalPages(),
        currPage: activeIdx,
        state: paginationState
    }]
};

export default usePagination;
