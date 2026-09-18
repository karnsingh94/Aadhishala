import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import WhyPage from './pages/WhyPage.jsx';

const routes = {
  '/': HomePage,
  '/solutions': SolutionsPage,
  '/why': WhyPage,
  '/onboarding': OnboardingPage,
  '/reviews': ReviewsPage,
  '/contact': ContactPage,
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
      <Page />
      <Footer />
    </>
  );
}
