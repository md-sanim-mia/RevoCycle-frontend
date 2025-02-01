import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persist, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
