import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Courses from "./pages/courses/Courses";
import About from "./pages/aboutUs/About";
import Contact from "./pages/contact/Contact";
import Instructors from "./pages/instructors/Instructors";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
