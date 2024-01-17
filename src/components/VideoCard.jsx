import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";

const VideoCard = ({ video }) => {
    const {snippet: {title, channelId, channelTitle, thumbnails: { high } },  id: { videoId } } = video;
  return (
    <Card sx={{ width: { xs: '100%', sm: '260px', md: '320px', lg: '380px' }, boxShadow: 'none', borderRadius: 5, ml: '10px', mr: '10px'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
             image={high?.url || demoThumbnailUrl}
             alt={title}
             sx={{ width: {xs: '100%', sm: '260px', md: '320px', lg: '380px'}, height: '200px'}}
    
            > </CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: 'black', height: '106px'}}>
         <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight={'bold'} color='white'>
                {title.slice(0, 50) || demoVideoTitle.slice(0, 50)}...
            </Typography>
         </Link>
         <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
            <Typography variant="substitle2" fontWeight={'bold'} color={'gray'} display={'block'} mt={1}>
              {channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: "12px", color: "grey", ml: "5px" }}  />
            </Typography>
        </Link>
        </CardContent>
    </Card>
);
  
}

export default VideoCard
