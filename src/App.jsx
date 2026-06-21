import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { PageTransition } from "./components/PageTransition";
import { FloatingContact } from "./components/FloatingContact";

const SmoothScroll = lazy(() => import("./components/SmoothScroll"));

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const IndustryPage = lazy(() => import("./pages/IndustryPage.jsx"));
const SitemapPage = lazy(() => import("./pages/SitemapPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function PageLoader() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--color-bg)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 48, height: 48, border: "3px solid var(--color-border)", borderTop: "3px solid var(--color-accent)", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
        <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Loading...</p>
      </div>
    </div>
  );
}

function LegacyHomeRoute() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const industry = searchParams.get("industry");
  const page = searchParams.get("page");

  if (product) return <Navigate to={`/product/${product}`} replace />;
  if (industry) return <Navigate to={`/industry/${industry}`} replace />;
  if (page === "sitemap") return <Navigate to="/sitemap" replace />;

  return <Outlet />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<LegacyHomeRoute />}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        </Route>
        <Route path="/product/:productId" element={<PageTransition><ProductPage /></PageTransition>} />
        <Route path="/industry/:industryId" element={<PageTransition><IndustryPage /></PageTransition>} />
        <Route path="/sitemap" element={<PageTransition><SitemapPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <SmoothScroll>
            <AnimatedRoutes />
            <FloatingContact />
          </SmoothScroll>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
