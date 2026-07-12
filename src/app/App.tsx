import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { WhyPhilippines } from "./pages/WhyPhilippines";
import { Industries } from "./pages/Industries";
import { CaseStudies } from "./pages/CaseStudies";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { Solutions } from "./pages/Solutions";
import { ServiceLanding } from "./pages/ServiceLanding";
import { Blog } from "./pages/Blog";
import { BlogArticle } from "./pages/BlogArticle";

const legacyServiceRedirects: Record<string, string> = {
  "virtual-assistant": "/business-operations-support",
  "customer-support": "/customer-support-outsourcing",
  "workflow-support": "/business-operations-support",
  "back-office": "/business-operations-support",
  "executive-assistance": "/business-operations-support",
  "remote-operations": "/business-operations-support",
};

function LegacyServiceRedirect() {
  const { slug } = useParams();
  return <Navigate to={legacyServiceRedirects[slug ?? ""] ?? "/solutions"} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/business-operations-support" element={<ServiceLanding />} />
          <Route path="/ecommerce-virtual-assistant" element={<ServiceLanding />} />
          <Route path="/gohighlevel-virtual-assistant" element={<ServiceLanding />} />
          <Route path="/web-maintenance-support" element={<ServiceLanding />} />
          <Route path="/customer-support-outsourcing" element={<ServiceLanding />} />
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/:slug" element={<LegacyServiceRedirect />} />
          <Route path="/why-philippines" element={<WhyPhilippines />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/experience" element={<CaseStudies />} />
          <Route path="/case-studies" element={<Navigate to="/experience" replace />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
