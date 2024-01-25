import { createContext, useCallback, useState } from "react";
import { fetchApi } from "../utils/api";
import LoadingBar from "react-top-loading-bar";
// import { useParams } from "react-router-dom";    

const YoutubeContext = createContext({});

export const YoutubeProvider = ({ children }) => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videoDetails, setVideoDetails] = useState(null);
    const [videos, setVideos] = useState([]);
    const [comments, setComments] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [progress, setProgress] = useState(0);
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideos, setChannelVideos] = useState([]);

    const fetchData = async(query) => {
      setProgress(30);
      try {
        const data =  await fetchApi(`search?part=snippet&q=${query}&page=${page}`)
        setProgress(70);
        setVideos(data.items);
        setTotalResults(data?.pageInfo?.totalResults);
        setProgress(100);

      } catch (error) {
        console.log(error.message)
      }
    }

    const fetchMoreData = async(query) => {
      setProgress(30);
      try{
        const data = await fetchApi(`search?part=snippet&q=${query}&page=${page + 1}`)
         setProgress(70);
         setVideos(videos.concat(data.items));
         setPage(page + 1);
         setProgress(100);
      } catch (err) {
        console.log(err.message);
      }
   
    }


  const getVideoDetails = (id) => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetails(data.items[0]));
  }
  const getRelatedVideos = (id) => {
    fetchApi(`search?part=snippet&relatedToVideo=${id}&type=video`)
        .then((data) => setRelatedVideos(data.items));
  }
  const commentsThreads = (id) => {
    fetchApi(`commentThreads?part=snippet&videoId=${id}`)
      .then((data) => setComments(data.items));
  }



  const channelInfo = useCallback(async(id) => {
      const data = await fetchApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
  
      const videosData = await fetchApi(`search?channelId=${id}&part=snippet&order=date`);
      setChannelVideos(videosData?.items);

  }, [setChannelDetail, setChannelVideos])

    return (
          <YoutubeContext.Provider value={{
            selectCategory, setSelectCategory, videos, fetchData, fetchMoreData, totalResults, progress, setProgress,  videoDetails, comments, relatedVideos, getRelatedVideos, getVideoDetails, commentsThreads, channelInfo, channelDetail, channelVideos
          }}>
                 <LoadingBar 
                  color='#FF5722'
                  height={5}
                  progress={progress}
                />
            {children}
          </YoutubeContext.Provider>
    )
}

export default YoutubeContext;