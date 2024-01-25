import { Box, Stack } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"
import Loader from "./Loader"
// import { useContext } from "react"
// import YoutubeContext from "../context/YoutubeContext"

const Video = ({ videos, direction }) => {
  // const { videos } = useContext(YoutubeContext);
    if(!videos) return <Loader />
  return (
    <Stack direction={direction || 'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'start'} gap={1.3}>
     { videos.length ?
        videos.map((item, idx) => (
            <Box key={idx} >
                {item.id.videoId &&  <VideoCard video={item} />}
                {item.id.channelId &&  <ChannelCard channelDetail={item} />}
               
            </Box>
            ))
            : <Loader />
     }
    </Stack>
  )
}

export default Video
