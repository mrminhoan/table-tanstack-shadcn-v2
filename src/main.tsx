import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <MantineProvider>
      <App />
      <Toaster />
    </MantineProvider>
  // </StrictMode>
);
