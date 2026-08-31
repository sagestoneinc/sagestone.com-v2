import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";

// Home stays eager (the landing route → best LCP). The rest split into
// their own chunks and load on navigation.
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })));
const WhyPhilippines = lazy(() => import("./pages/WhyPhilippines").then((m) => ({ default: m.WhyPhilippines })));
const Industries = lazy(() => import("./pages/Industries").then((m) => ({ default: m.Industries })));
const CaseStudies = lazy(() => import("./pages/CaseStudies").then((m) => ({ default: m.CaseStudies })));
const FAQ = lazy(() => import("./pages/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));
const SmsTerms = Terms;
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sms-terms" element={<SmsTerms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </MotionConfig>
  );
}
