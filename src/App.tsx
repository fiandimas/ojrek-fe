import { RouterProvider } from "react-router";

import router from "@/app/router/Router";

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App;