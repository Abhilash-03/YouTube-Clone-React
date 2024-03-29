import { Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChannelDetails, Feed, Navbar, SearchFeed, VideoDetails } from './components'
import { YoutubeProvider } from './context/YoutubeContext'

function App() {
  return (
    <>
    <YoutubeProvider>
     <Router>
      <Box sx={{ backgroundColor: '#080808', color: '#FF5722'}}>
       <Navbar/>
  
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetails/>} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
      
      </Box>
     </Router>
     </YoutubeProvider>
    </>
  )
}

export default App
