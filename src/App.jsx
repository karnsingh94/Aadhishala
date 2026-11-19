import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import CollegeErpPage from './pages/CollegeErpPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import SchoolErpPage from './pages/SchoolErpPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import UniversityErpPage from './pages/UniversityErpPage.jsx';
import WhyPage from './pages/WhyPage.jsx';

const routes = {
  '/': HomePage,
  '/school-erp': SchoolErpPage,
  '/college-erp': CollegeErpPage,
  '/university-erp': UniversityErpPage,
  '/solutions': SolutionsPage,
  '/why': WhyPage,
  '/onboarding': OnboardingPage,
  '/reviews': ReviewsPage,
  '/contact': ContactPage,
  '/privacy-policy': PolicyPage,
  '/terms-and-conditions': PolicyPage,
  '/refund-policy': PolicyPage,
  '/cancellation-policy': PolicyPage,
};

export default function App() {
  const [page, setPage] = useState(() => window.location.pathname);
  const Page = routes[page] ?? HomePage;

  useEffect(() => {
    const syncCurrentPage = () => setPage(window.location.pathname);

    window.addEventListener('popstate', syncCurrentPage);

    return () => window.removeEventListener('popstate', syncCurrentPage);
  }, []);

  return (
    <>
      <Header page={page} />
      <Page path={page} />
      <Footer />
    </>
  );
}
