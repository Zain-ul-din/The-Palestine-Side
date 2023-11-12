/* eslint-disable @next/next/no-img-element */
import usePagination from "@/hooks/usePagination";
import Martyr from "@/types/Martyr";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Table, Tbody, Td, Th, Thead, Tr, Text, Input, useMediaQuery, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Martyrs ({ martyrs }: { martyrs: Array<Martyr> }) 
{
    const [filterData, setFilterData] = useState<Martyr[]>(martyrs)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [dataToShow, nextPage, prevPage, resetPagination, paginationMeta] = usePagination<Martyr>(filterData, 15)
    
    useEffect(()=> {
        resetPagination()
        setFilterData(_ => martyrs
            .filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                || d.sex.toLocaleLowerCase().includes(searchQuery.toLowerCase())
                || d.age.toString() == searchQuery
            )
        )
    }, [searchQuery, martyrs])

    const [isSmallScreen] = useMediaQuery("(max-width: 500px)")
    
    return <>
        <Flex maxW={'1400px'} margin={'0 auto'} p={isSmallScreen ? 5 : 2} flexDir={'column'} overflowX={'auto'}>
            <Flex my={4} justifyContent={'center'} fontStyle={'italic'} textAlign={'center'}>
                <Heading>{`"Homage to the Martyrs of the Palestine `} 
                    <img 
                        src="/images/palestine_flag.png"
                        alt="palestine_flag"
                        style={{ display: 'inline-block', width: '2.2rem', height: '2rem', transform: 'translateY(6px)' }}
                    />{`"`}
                </Heading>
            </Flex>

            <Text my={3} mt={5} fontSize={'lg'}>The names of the people killed in Israeli attacks on Gaza.</Text>
            {/* Navigation Buttons */}
            <Flex  alignItems={'center'}>
                <Flex>
                    <Input 
                        placeholder="search"
                        size={'sm'}
                        value={searchQuery}
                        onChange={(e)=> setSearchQuery(e.target.value)}
                        mx={2}
                    />    
                </Flex>
                
                <Flex marginLeft={'auto'} justifyContent={'center'} alignItems={'center'}>
                    <Button size={'sm'} 
                        isDisabled={paginationMeta.state != "both" && paginationMeta.state != "prev"}
                        onClick={prevPage}
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <Text mx={2} fontSize={isSmallScreen ? 'xs' : 'sm'} textAlign={'center'}>
                        Page {paginationMeta.currPage} of {paginationMeta.totalPages}
                    </Text>
                    <Button size={'sm'}
                        isDisabled={paginationMeta.state != "both" && paginationMeta.state != "next"}
                        onClick={nextPage}
                    >
                        <ChevronRightIcon />
                    </Button>
                </Flex>
            </Flex>
            {/* Navigation Buttons End */}
            
            <Table my={4} mb={10}>
                <Thead>
                    <Tr>
                      <Th>Name</Th>  
                      <Th>Sex</Th>  
                      <Th>Age</Th>  
                    </Tr>
                </Thead>
                <Tbody>
                    {dataToShow.map((d,idx)=>{
                        return <Tr key={idx}>
                            <Td fontSize={isSmallScreen ? 'xs' : 'initial'}>{d.name}</Td>
                            <Td fontSize={isSmallScreen ? 'xs' : 'initial'}>{d.sex}</Td>
                            <Td fontSize={isSmallScreen ? 'xs' : 'initial'}>{d.age}</Td>
                        </Tr>
                    })}
                </Tbody>
            </Table>

            <Text fontSize={'sm'} color={'gray.600'} p={3}>
                October 7-25
                <br/>
                <b>Source:</b> Palestinian Ministry of Health
            </Text>
        </Flex>
    </>
}