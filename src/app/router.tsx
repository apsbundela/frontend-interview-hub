import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routesPaths';
import { PublicLayout } from './PublicLayout';
import HomePage from '../features/home/HomePage';
import CompanyPage from '../features/companies/CompanyPage';
import ExperiencePage from '../features/experiences/ExperiencePage';
import AboutPage from '../features/about/AboutPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.COMPANY} element={<CompanyPage />} />
          <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
