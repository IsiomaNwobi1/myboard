import { useState } from "react";
import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Dashboard from "../src/pages/user_default_dashboard/Dashboard";
import Form from "./components/populated_dashboard/form/Form";
 import Menu from "./components/populated_dashboard/menu/Menu";
import GroceryDashboard from "./pages/user_grocery_dashboard/GroceryDashboard";
// import GroceryBody from "./components/groceries_dashboard/GroceryBody";
// import TasksTab1Body from "./components/groceries_dashboard/TasksTab1Body";
// import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
// import EditMenu from "./components/populated_dashboard/edit_menu/EditMenu";
// import InitiateRestPage from "./pages/InitiateRestPage";
// import ResetPage from "./pages/ResetPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-task" element={<Form />} />
        <Route path="edit-task" element={<Menu />} />

        <Route path="/grocery-dashboard" element={<GroceryDashboard />} />

      </Route>
    </Routes>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <LandingPage />,
  //     },
  //     {
  //       path: "/home",
  //       element: <LandingPage />,
  //     },
  //     {
  //       path: "/dashboard",
  //       element: (
  //         <ProtectedRoute
  //           isAuthenticated={isAuthenticated}
  //           component={Dashboard}
  //         />
  //       ),
  //     },
  //     {
  //       path: "/signup",
  //       element: <SignupPage />,
  //     },
  //     {
  //       path: "/login",
  //       element: <LoginPage setIsAuthenticated={setIsAuthenticated} />,
  //     },
  //     {
  //       path: "/create-task",
  //       element: (
  //         <ProtectedRoute isAuthenticated={isAuthenticated} component={Form} />
  //       ),
  //     },
  //     {
  //       path: "/edit-task",
  //       element: (
  //         <ProtectedRoute isAuthenticated={isAuthenticated} component={Menu} />
  //       ),
  //     },
  //     {
  //       path: "/edit-menu",
  //       element: (
  //         <ProtectedRoute
  //           isAuthenticated={isAuthenticated}
  //           component={EditMenu}
  //         />
  //       ),
  //     },
  //     {
  //       path: "/grocerydashboard",
  //       element: (
  //         <ProtectedRoute
  //           isAuthenticated={isAuthenticated}
  //           component={GroceryDashboard}
  //         >
  //           <ProtectedRoute path="" component={GroceryBody} />
  //           <ProtectedRoute path="groceries" component={GroceryBody} />
  //           <ProtectedRoute path="cooking" component={TasksTab1Body} />
  //         </ProtectedRoute>
  //       ),
  //     },
  //     {
  //       path: "/initiate-reset-password",
  //       element: <InitiateRestPage />,
  //     },
  //     {
  //       path: "/reset-password",
  //       element: <ResetPage />,
  //     },
  //   ]);

  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
