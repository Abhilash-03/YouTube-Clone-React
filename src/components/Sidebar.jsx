import { Button, Stack } from "@mui/material"
import { categories } from "../utils/constants"

const Sidebar = ({ selectCategory, setSelectCategory}) => {
  return (
    <Stack
     direction={'row'}
     gap={1.3}
     sx={{
        overflowY: 'auto',
        flexDirection: {md: 'column'},
        height: {sm: 'auto', md: '95%'}
     }}
    >
    {
        categories.map(category => (
            <Button key={category.name} startIcon={category.icon}
             sx={{color: '#fff', background: category.name == selectCategory && '#FC1503', m: {sm: 2, md: .3}}}
             className="category-btn"
             onClick={() => setSelectCategory(category.name)}
            >
            {category.name}
          </Button>
        ))
    }
    </Stack>
  )
}

export default Sidebar
