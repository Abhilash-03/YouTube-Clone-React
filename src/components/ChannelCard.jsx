import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from "../utils/constants";
import Loader from "./Loader";

const ChannelCard = ({ channelDetail, marginTop }) => {
    if(!channelDetail) return <Loader />
  return (
    <Box
     sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
     }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', textAlign: 'center', 
            color: 'white', alignItems: 'center'
          }}>
            <CardMedia
             image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
             alt={channelDetail?.snippet?.title}
             sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid grey'}}
            />
      <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
            <>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.videoCount).toLocaleString('en-US')} Videos
          </Typography>
          </>
        )}
          </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
