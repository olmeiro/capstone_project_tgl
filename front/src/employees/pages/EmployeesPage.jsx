import React from "react"
import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material'

// import { EmployeeLayout } from "../layout/EmployeeLayout"
import { EmployeeView  } from "../views"
import { EmployeeLayout2 } from "../layout/EmployeeLayout2"
// NothingSelectedView

export const EmployeesPage = () => {
  return (
    <EmployeeLayout2>
      {/* <NothingSelectedView /> */}
      <EmployeeView />

      <IconButton
        size='large'  
        sx={{
          color: 'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ FontSize: 30 }} />
      </IconButton>
    </EmployeeLayout2>
  ) 
  
}
