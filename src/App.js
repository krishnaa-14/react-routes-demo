import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Link1 from "./components/Link1";
import Link2 from "./components/Link2";
import Link3 from "./components/Link3";
import Main from "./components/Main";

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body />,
      children : [
        {
          path : "/",
          element : <Main> </Main>
        },
        {
          path : "/link1",
          element : <Link1 />
        },
        {
          path : "/link2",
          element : <Link2> </Link2>
        },
        {
          path : "/link3",
          element : <Link3> </Link3>
        }
      ]
    },
    {
      path : "/contact",
      element : <Contact />
    }
  ])

  return (
      <RouterProvider router={appRouter}>
      </RouterProvider>
  );
}

export default App;
