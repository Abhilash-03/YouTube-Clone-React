import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import { useContext, useEffect } from "react"
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import YoutubeContext from "../context/YoutubeContext";

const Feed = () => {
  const { selectCategory, videos, fetchMoreData, totalResults, fetchData} = useContext(YoutubeContext);

  useEffect(() => {
      fetchData(selectCategory);
  }, [selectCategory])
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
        <Sidebar />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
         <Typography variant="h4" fontWeight={'bold'} mb={2} sx={{ color: 'white'}}>
          {selectCategory}  <span style={{color: '#F31503'}}>Videos</span>
         </Typography>

        <InfiniteScroll
            dataLength={videos.length}
            next={() => fetchMoreData(selectCategory)}
            hasMore={videos.length !== totalResults}
            loader={<Loader/>}
        >
          <Video videos={videos} />
        </InfiniteScroll> 
      </Box>
    </Stack>
  )
}

export default Feed
