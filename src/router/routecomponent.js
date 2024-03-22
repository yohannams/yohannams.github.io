import React from "react";
import { GlobalProvider } from "../context/globalcontext";
import LayoutDashboard from "../widgets/LayoutDashboard";
import LayoutLanding from "../widgets/LayoutLanding";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Footer from "../components/footer";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutLanding>
                  <Home />
                  {/* <Profile /> */}
                  <Portfolio />
                  <Contact />
                </LayoutLanding>
              }
            />

            {/* <Route
              path="/dashboard"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Datatable />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                    <Form />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form/:IdData"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Form />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/job-vacancy/:IdData"
              element={
                <LayoutLanding>
                  <Detail />
                </LayoutLanding>
              }
            />

            <Route
              path="/detail"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Detail />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="*"
              element={
                  <NotFound />
              }
            />

            <Route
              path="/dashboard/profile"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Profile />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/change-password"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <ChangePassword />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/register"
              element={
                <LayoutLanding>
                  <Register />
                </LayoutLanding>
              }
            />

            <Route
              path="/login"
              element={
                <LoginRoute>
                  <LayoutLanding>
                    <Login />
                  </LayoutLanding>
                </LoginRoute>
              }
            /> */}
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
