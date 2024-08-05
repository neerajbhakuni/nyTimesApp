import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, ArticleDetail } from "../screens";
import { Loader } from "../components/widgets";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader isLoading={true}/>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/detail/:articleId"
          element={
            <Suspense fallback={<Loader isLoading={true}/>}>
              <ArticleDetail />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader isLoading={true}/>}>
              <Home />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
