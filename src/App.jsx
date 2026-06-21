import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const IndustryPage = lazy(() => import("./pages/IndustryPage.jsx"));
const SitemapPage = lazy(() => import("./pages/SitemapPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function PageLoader() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0b1929" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 48, height: 48, border: "3px solid rgba(14,127,114,0.2)", borderTop: "3px solid #1dcfba", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Loading...</p>
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

function AppRoutes() {
  return (
    <Routes>
      <Route element={<LegacyHomeRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/industry/:industryId" element={<IndustryPage />} />
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
