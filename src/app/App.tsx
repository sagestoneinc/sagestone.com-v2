import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { WhyPhilippines } from "./pages/WhyPhilippines";
import { Industries } from "./pages/Industries";
import { CaseStudies } from "./pages/CaseStudies";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/why-philippines" element={<WhyPhilippines />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
