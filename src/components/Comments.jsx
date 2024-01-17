import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Typography } from '@mui/material'
import { useState } from 'react';

const Comments = ({comments}) => {
    const [fullComment, setFullComment] = useState(false);
    const { snippet: { textDisplay, authorDisplayName, authorProfileImageUrl, likeCount, publishedAt }} = comments.snippet.topLevelComment;
  return (
   
  
     <Box sx={{ backgroundColor: '#2b2b2b', color: 'white'}} height={'auto'} m={1} borderRadius={'10px'} p={2} fontSize={'1.2rem'}>
        <Box display={'flex'} flexDirection={'row'} gap={1}>
           <img src={authorProfileImageUrl} alt={authorDisplayName} height={'50px'} width={'50px'} style={{borderRadius: '50%'}} />
           <Box>
              <Typography fontSize={'18px'} color={'lightgrey'} fontWeight={'bold'}>{authorDisplayName} <span>{publishedAt.slice(0, 10)}</span></Typography>
            {/* { */}
              <Typography m={.4} fontFamily={'serif'}>{fullComment ? textDisplay : textDisplay.slice(0, 140)} {textDisplay.length > 140 && <button className='cmnt-btn' onClick={() => setFullComment(!fullComment)}>{fullComment ? 'Show Less' : "More..."}</button>}</Typography>
              {/* } */}
              <Typography alignItems={'center'} display={'flex'}><ThumbUpIcon color='blue' sx={{ mr: 1}} /> {likeCount}</Typography>
           </Box>

        </Box>
     </Box>
  )
}

export default Comments
