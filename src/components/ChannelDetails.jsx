import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/api";
import { Box } from "@mui/material";
import Video from "./Video";
import ChannelCard from "./ChannelCard";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async() => {
      const data = await fetchApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchApi(`search?channelId=${id}&part=snippet&order=date`);
      setChannelVideos(videosData?.items);
    }

    fetchResults();
  }, [id])


  return (
    <Box minHeight={'95vh'}>
      <Box>
         <Box height={'300px'} zIndex={10} sx={{ 
          background:' linear-gradient(90deg, rgba(81,99,144,1) 0%, rgba(44,116,145,1) 49%, rgba(127,127,237,1) 100%)'
         }} />
        <ChannelCard channelDetail={channelDetail} marginTop={'-93px'} />
      </Box>
      <Box p={2} display={'flex'}>
        <Video videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
