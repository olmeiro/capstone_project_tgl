import { Typography } from "@mui/material"
import React from "react"
import { EmployeeLayout } from "../layout/EmployeeLayout"
import { NothingSelectedView } from "../views"

export const EmployeesPage = () => {
  return (
    <EmployeeLayout>
      <NothingSelectedView />
      {/* ListEmployees */}
    </EmployeeLayout>
  ) 
  
}
