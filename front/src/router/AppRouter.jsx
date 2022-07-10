import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { EmployeesRoutes } from "../employees/routes/EmployeesRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login and register */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* Employees */}
      <Route path="/*" element={<EmployeesRoutes />} />
    </Routes>
  )
}
