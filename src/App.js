import Home from "./pages/Home";

import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
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
            <Suspense fallback={<div>Loading..</div>}>
              <Crew />
            </Suspense>
          }
          s
        />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
