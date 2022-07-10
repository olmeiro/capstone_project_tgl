import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { EmployeesPage } from "../pages/EmployeesPage"

export const EmployeesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
