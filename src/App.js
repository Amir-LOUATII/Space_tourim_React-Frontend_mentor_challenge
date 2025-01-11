import Home from "./pages/Home";

import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
const Crew = lazy(() => import("./pages/Crew"));
const Destination = lazy(() => import("./pages/Destination"));
const Technology = lazy(() => import("./pages/Technology"));
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/crew"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Crew />
            </Suspense>
          }
          s
        />
        <Route
          path="/destination"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Destination />
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Technology />
            </Suspense>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
