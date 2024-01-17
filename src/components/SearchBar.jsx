import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        
        if(search) {
            navigate(`/search/${search}`);
            setSearch('');
        }
    }

  return (
    <Paper
     component={'form'}
     onSubmit={handleChange}
     sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
     }}
    >
      <input 
        className="search-bar"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px', color: 'red' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
