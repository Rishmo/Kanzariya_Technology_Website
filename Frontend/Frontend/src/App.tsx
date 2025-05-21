import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import SupportPage from './pages/SupportPage';
import CompanyPage from './pages/CompanyPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Login from './components/auth/Login';
import PartnerRegistration from './components/partner/PartnerRegistration';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import ExecutiveDashboard from './pages/dashboard/ExecutiveDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RegisterPartner from './pages/RegisterPartner';
import Signup from './components/auth/Signup';
import PartnerApprovalsPage from './components/partner/PartnerApprovalsPage';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register-partner" element={<PartnerRegistration />} />
      <Route path="/approval" element={<PartnerApprovalsPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/register-partner" element={<RegisterPartner />} />


        <Route path="dashboard">
          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="executive"
            element={
              <ProtectedRoute allowedRoles={['executive']}>
                <ExecutiveDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;