import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import Video from "./Video";
import { fetchApi } from "../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Feed = ({ setProgress }) => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchData = async() => {
      setProgress(30);
      try {
        const data =  await fetchApi(`search?part=snippet&q=${selectCategory}&page=${page}`)
        setProgress(70);
        setVideos(data.items);
        setTotalResults(data?.pageInfo?.totalResults);
        setProgress(100);

      } catch (error) {
        console.log(error.message)
      }
    }
    useEffect(() => {
      fetchData();
    }, [selectCategory])
    // console.log(videos);

    const fetchMoreData = () => {
      setProgress(30);
      fetchApi(`search?part=snippet&q=${selectCategory}&page=${page + 1}`)
      .then((data) => setVideos(videos.concat(data.items)))
      .catch(err => console.log(err.message));

      setPage(page + 1);
      setProgress(100);
    }

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

        <InfiniteScroll
            dataLength={videos.length}
            next={fetchMoreData}
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
