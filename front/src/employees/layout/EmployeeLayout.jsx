import { Box } from '@mui/system'
import React from 'react'

export const EmployeeLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
      {/* Navbar */}
      {/* Sidebar */}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
      </Box>
      { children }
    </Box>
  )
}
