import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import { Contact, ContactDE, ContactPL, ContactUS } from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import NotFound from "./pages/NotFound.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "contact",
        Component: Contact,
        children: [
          {
            path: "pl",
            Component: ContactPL,
          },
          {
            path: "de",
            Component: ContactDE,
          },
          {
            path: "us",
            Component: ContactUS,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
