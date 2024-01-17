import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import Video from "./Video";
import { fetchApi } from "../utils/api";

const Feed = () => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchApi(`search?part=snippet&q=${selectCategory}`)
        .then((data) => setVideos(data.items))
        .catch(err => console.log(err.message))
    }, [selectCategory])
    // console.log(videos);

  return (
    <Stack sx={{ flexDirection: {sm: 'column', md: 'row'}}}>
     <Box
      sx={{
        height: { sm: 'auto', md: "92vh"},
        borderRight: '1px solid #3d3d3d',
        px: {sm: 0, md: 2},
        display: {xs: 'none', md:'block'}
      }}
     >
        <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
         <Typography variant="h4" fontWeight={'bold'} mb={2} sx={{ color: 'white'}}>
          {selectCategory}  <span style={{color: '#F31503'}}>Videos</span>
         </Typography>
        
        <Video videos={videos} />

      </Box>
    </Stack>
  )
}

export default Feed
