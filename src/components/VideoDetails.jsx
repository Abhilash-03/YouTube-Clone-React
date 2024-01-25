import { Box, Stack, Typography } from "@mui/material"
import { useContext, useEffect } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import Video from "./Video"
import { CheckCircle, CommentRounded } from "@mui/icons-material"
import Comments from "./Comments"
import Loader from "./Loader"
import YoutubeContext from "../context/YoutubeContext"

const VideoDetails = () => {
   const { videoDetails, comments, relatedVideos, getRelatedVideos, getVideoDetails, commentsThreads } = useContext(YoutubeContext);
   const { id } = useParams();
   
   useEffect(() => {
      getRelatedVideos(id);
      getVideoDetails(id);
      commentsThreads(id);
   }, [id]);

   if(!videoDetails?.snippet) return <Loader />;

   const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetails;

   if(!comments) return <Loader />;

  return (
     <Box minHeight={'95vh'}>
        <Stack direction={{ xs: 'column', md: 'row'}}>
            <Box flex={1}>
               <Box sx={{ width: '100%', position: 'sticky', top: '70px', m: 1}}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />

                  <Typography variant="h5" fontWeight={'bold'} p={2} color={'white'}>
                    {title}
                  </Typography>
                  <Stack direction={'row'} justifyContent={'space-between'} sx={{ color: '#fff' }} py={1} px={2}>
                    <Link to={`/channel/${channelId}`} >
                      <Typography variant={ 'h6'} color= '#fff'>
                         {channelTitle}
                         <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                      </Typography>
                    </Link>
                    <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                       <Typography variant="body1" sx={{ opacity: 0.7}}>
                          {parseInt(viewCount).toLocaleString()} views
                       </Typography>
                       <Typography variant="body1" sx={{ opacity: 0.7}}>
                          {parseInt(likeCount).toLocaleString()} likes
                       </Typography>
                    </Stack>
                </Stack>
                <Box>
                <Typography variant="h5" fontWeight={'bold'} p={2} color={'lightgray'} alignItems={'center'} > 
                     <CommentRounded /> Comments 
                  </Typography>
                     <Box sx={{height: {sm: '700px', md: 'auto'}, overflowY: 'auto'}}>
                           {
                              comments.map((cmnts, idx) => (
                                 <Comments key={idx} comments={cmnts} />
                               ))
                              }
                  </Box>
               </Box>

               </Box>
            </Box>
            <Box px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignContent={'center'}>
          <Video videos={relatedVideos} direction='column'  />
         </Box>
        </Stack>
     </Box>
  )
}

export default VideoDetails
