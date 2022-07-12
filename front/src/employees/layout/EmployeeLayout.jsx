import React from "react"
import { Box } from "@mui/system"

import { NavBar, SideBar } from "../components"
import { Toolbar } from "@mui/material"

const drawerWidth = 280

export const EmployeeLayout = ({ children }) => {



  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <SideBar drawerWidth={drawerWidth} toogleDrawer={mobileOpen} /> 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
