import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="fizlau6z5" data-path="src/App.tsx">
    <TooltipProvider data-id="gvvckyocq" data-path="src/App.tsx">
      <Toaster data-id="qijmsgrwl" data-path="src/App.tsx" />
      <BrowserRouter data-id="8ljogmmf0" data-path="src/App.tsx">
        <Routes data-id="1do8ijw30" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="aav55k733" data-path="src/App.tsx" />} data-id="00m2xrlt5" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="mhc8gjib6" data-path="src/App.tsx" />} data-id="sdsn3641j" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;