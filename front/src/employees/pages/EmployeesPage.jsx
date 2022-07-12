import React from "react"
import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material'

import { EmployeeLayout } from "../layout/EmployeeLayout"
import { EmployeeListView  } from "../views"
// NothingSelectedView

export const EmployeesPage = () => {
  return (
    <EmployeeLayout >
      {/* <NothingSelectedView /> */}
      <EmployeeListView />

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
    </EmployeeLayout>
  ) 
  
}
