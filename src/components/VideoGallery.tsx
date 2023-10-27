import VideosContent from "@/types/VideosContent";
import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function VideoGallery ({ content } : { content: VideosContent } )
{
    const [input, setInput] = useState<string>("")

    return <Flex width={'100%'} flexDir={'column'}>
        <Flex justifyContent={'center'}>
            <Box my={4}>
                <Input 
                    width={'20rem'}
                    placeholder="Search Video"
                    onChange={(e)=> setInput(e.target.value)}
                />
            </Box>
        </Flex>
        <Flex 
            maxW={'1500px'} width={'100%'} 
            justifyContent={'center'}
            alignContent={'center'}
            flexWrap={'wrap'}
            m={'0 auto'}
            pb={8}
            gap={'8px'}
        >
            {content.videos
            .filter(v=> v.title.toLowerCase().includes(input.toLowerCase()))
            .map((video, idx)=> {
                return <Flex key={idx} flexDir={'column'} gap={2}
                    bg={'rgba(255,255,255,0.02)'} rounded={'md'} p={2}
                >
                    <Text fontWeight={'bold'} fontSize={'sm'} pl={'0.2rem'} 
                        textOverflow={'ellipsis'} maxW={'350'} whiteSpace={'nowrap'}
                        overflow={'hidden'}
                    >
                        {video.title}
                    </Text> 
                    <iframe width="350" height="250"
                        style={{ borderRadius: '0.5rem', background: 'gray' }} 
                        src={video.url}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        loading="lazy"
                        allowFullScreen
                    >
                    </iframe>
                </Flex>
            })}
        </Flex>
    </Flex>
}

