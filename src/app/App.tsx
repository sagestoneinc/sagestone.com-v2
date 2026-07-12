import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import type { ReactNode } from "react";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail, LegacyServiceRedirect } from "./pages/ServiceDetail";
import { WhyPhilippines } from "./pages/WhyPhilippines";
import { Industries } from "./pages/Industries";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { SeoHead } from "./seo/SeoHead";
import { Experience } from "./pages/Experience";
import { Blog } from "./pages/Blog";
import { BlogArticle } from "./pages/BlogArticle";
import { CaseStudies } from "./pages/CaseStudies";

type SeoRouteProps = {
  path: string;
  children: ReactNode;
  includeItemList?: boolean;
};

function SeoRoute({ path, children, includeItemList = false }: SeoRouteProps) {
  return (
    <>
      <SeoHead path={path} includeItemList={includeItemList} />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SeoRoute path="/"><Home /></SeoRoute>} />
          <Route path="/about" element={<SeoRoute path="/about"><About /></SeoRoute>} />
          <Route path="/solutions" element={<SeoRoute path="/solutions" includeItemList><Services /></SeoRoute>} />
          <Route path="/experience" element={<SeoRoute path="/experience"><Experience /></SeoRoute>} />
          <Route path="/blog" element={<SeoRoute path="/blog"><Blog /></SeoRoute>} />
          <Route path="/blog/how-to-hire-a-virtual-assistant" element={<SeoRoute path="/blog/how-to-hire-a-virtual-assistant"><BlogArticle /></SeoRoute>} />
          <Route path="/blog/what-does-an-ecommerce-virtual-assistant-do" element={<SeoRoute path="/blog/what-does-an-ecommerce-virtual-assistant-do"><BlogArticle /></SeoRoute>} />
          <Route path="/virtual-assistant-services" element={<SeoRoute path="/virtual-assistant-services"><ServiceDetail slug="virtual-assistant-services" /></SeoRoute>} />
          <Route path="/business-operations-support" element={<SeoRoute path="/business-operations-support"><ServiceDetail slug="business-operations-support" /></SeoRoute>} />
          <Route path="/ecommerce-virtual-assistant" element={<SeoRoute path="/ecommerce-virtual-assistant"><ServiceDetail slug="ecommerce-virtual-assistant" /></SeoRoute>} />
          <Route path="/gohighlevel-virtual-assistant" element={<SeoRoute path="/gohighlevel-virtual-assistant"><ServiceDetail slug="gohighlevel-virtual-assistant" /></SeoRoute>} />
          <Route path="/web-maintenance-support" element={<SeoRoute path="/web-maintenance-support"><ServiceDetail slug="web-maintenance-support" /></SeoRoute>} />
          <Route path="/customer-support-outsourcing" element={<SeoRoute path="/customer-support-outsourcing"><ServiceDetail slug="customer-support-outsourcing" /></SeoRoute>} />
          <Route path="/why-philippines" element={<SeoRoute path="/why-philippines"><WhyPhilippines /></SeoRoute>} />
          <Route path="/industries" element={<SeoRoute path="/industries"><Industries /></SeoRoute>} />
          <Route path="/case-studies" element={<SeoRoute path="/case-studies"><CaseStudies /></SeoRoute>} />
          <Route path="/faq" element={<SeoRoute path="/faq"><FAQ /></SeoRoute>} />
          <Route path="/contact" element={<SeoRoute path="/contact"><Contact /></SeoRoute>} />

          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/:slug" element={<LegacyServiceRedirect />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
