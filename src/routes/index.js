import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, ArticleDetail } from "../screens";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/detail/:articleId"
          element={
            <Suspense fallback={<></>}>
              <ArticleDetail />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
