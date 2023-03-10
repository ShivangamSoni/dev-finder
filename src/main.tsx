import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <App />
            <Toaster />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
);
