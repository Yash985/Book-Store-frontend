import "./App.css";
import Layout from "./Layout";
import AddBook from "./components/AddBook";
import DetailPage from "./components/DetailPage";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/details/:id" element={<DetailPage />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
