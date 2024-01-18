import { Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChannelDetails, Feed, Navbar, SearchFeed, VideoDetails } from './components'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
     <Router>
      <Box sx={{ backgroundColor: '#080808', color: '#FF5722'}}>
       <Navbar/>
       <LoadingBar 
        color='#FF5722'
        height={5}
        progress={progress}
       />
        <Routes>
           <Route path='/' exact element={<Feed setProgress={setProgress} />} />
           <Route path='/video/:id' element={<VideoDetails/>} />
           <Route path='/channel/:id' element={<ChannelDetails />} />
           <Route path='/search/:searchTerm' element={<SearchFeed setProgress={setProgress} />} />
        </Routes>
      </Box>
     </Router>
    </>
  )
}

export default App
