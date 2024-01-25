import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Video from "./Video";
import YoutubeContext from "../context/YoutubeContext";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { fetchData, videos, fetchMoreData, totalResults } = useContext(YoutubeContext);

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm])

  return (
    <>
    <Box p={2} minHeight={'95vh'}>
      <Typography variant={"h5"} fontWeight={900} color={'white'} mb={3} ml={{ sm: '100px'}} textAlign={'center'} gap={1}>
      Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
      {/* <Box sx={{ mr: { sm: '100px' } }}/> */}
      <InfiniteScroll
            dataLength={videos.length}
            next={() => fetchMoreData(searchTerm)}
            hasMore={videos.length !== totalResults}
            loader={<Loader/>}
        >
      {<Video videos={videos} />}
      </InfiniteScroll>
      </Box>
    </Box>
    </>
  )
}

export default SearchFeed
