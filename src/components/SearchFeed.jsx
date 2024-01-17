import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/api";
import { Box, Typography } from "@mui/material";
import Video from "./Video";

const SearchFeed = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setSearchVideos(data.items));
  }, [searchTerm])

  return (
    <>
    <Box p={2} minHeight={'95vh'}>
      <Typography variant={"h5"} fontWeight={900} color={'white'} mb={3} ml={{ sm: '100px'}} textAlign={'center'} gap={1}>
      Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
      {/* <Box sx={{ mr: { sm: '100px' } }}/> */}
      {<Video videos={searchVideos} />}
      </Box>
    </Box>
    </>
  )
}

export default SearchFeed
