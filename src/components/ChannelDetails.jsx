import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Video from "./Video";
import ChannelCard from "./ChannelCard";
import YoutubeContext from "../context/YoutubeContext";

const ChannelDetails = () => {
  const { channelInfo, channelDetail, channelVideos } = useContext(YoutubeContext);
  const { id } = useParams();

  useEffect(() => {
    channelInfo(id);
  }, [id])

  return (
    <Box minHeight={'95vh'}>
      <Box>
         <Box height={'300px'} zIndex={10} sx={{ 
          background:' linear-gradient(90deg, rgba(81,99,144,1) 0%, rgba(44,116,145,1) 49%, rgba(127,127,237,1) 100%)'
         }} />
        <ChannelCard channelDetail={channelDetail} marginTop={'-93px'} />
      </Box>
      <Box p={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Video videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
