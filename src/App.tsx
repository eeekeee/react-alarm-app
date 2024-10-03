import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import StopWatchPage from "./pages/StopWatchPage";
import AlarmPage from "./pages/AlarmPage";
import TimerPage from "./pages/TimerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "stopwatch", element: <StopWatchPage /> },
      { path: "alarm", element: <AlarmPage /> },
      { path: "timer", element: <TimerPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
