import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// QueryClient는 인스턴스를 사용하여 캐시와 상호작용 한다.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5분간 캐시된 데이터를 stale한 상태로 지정한다.
      // 5분 후 부터는 오래된 데이터로 판단하여 다음 요청 시 서버로 부터 새로운 데이터를 가져온다.
      staleTime: 1000 * 60 * 5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
