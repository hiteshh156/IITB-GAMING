import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Index from "./pages/Index";
import ApiDocs from "./pages/ApiDocs";
import Showcase from "./pages/Showcase";
import Community from "./pages/Community";

// Product Pages
import SDK from "./pages/products/SDK";
import Tools from "./pages/products/Tools";
import Assets from "./pages/products/Assets";
import Plugins from "./pages/products/Plugins";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<ApiDocs />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/community" element={<Community />} />
            
            {/* Product Routes */}
            <Route path="/sdk" element={<SDK />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/plugins" element={<Plugins />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;