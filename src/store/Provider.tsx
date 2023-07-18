"use client";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "../components/theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster position="top-right" reverseOrder={true} />
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
