import "./Index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq"
import Form from "./pages/help/Form"
import PageNotFound from "./pages/PageNotFound";
import Articles from "./pages/articles/Articles";

import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="articles" element={<ArticlesLayout/>}>
          <Route index element={<Articles/>}/>
        </Route>


        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );

  return (
    <div className="container">
        <RouterProvider router={routes}/>
    </div>
  );
};

export default App;
