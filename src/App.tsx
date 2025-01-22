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
import Tutorials from "./pages/Tutorials";
import ApiReference from "./pages/ApiReference";
import Examples from "./pages/Examples";
import Forums from "./pages/Forums";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

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
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            
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