import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Board = React.lazy(() => import("../pages/InterviewShortlistingBoard/index"));

const AppRouter = () => {
  return (
    <div>
      <div className="content-backdrop">
        <Router>
          <Suspense fallback={<div></div>}>
          
            <Routes>
              <Route
                exact
                path="/"
                element={<Board />}
              />

            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
};

export default AppRouter;
