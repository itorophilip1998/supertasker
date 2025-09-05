import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/auth/SignUp";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Define your routes here */}
      <Routes>
        {/* Private Route */}
        <Route path="/" element={<h1>Home Page</h1>} />

        {/* Public Route */}
        <Route
          path="/auth/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
