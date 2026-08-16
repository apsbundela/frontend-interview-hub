import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/routesPaths';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1040px] gap-8 px-6 py-10 sm:grid-cols-[1.5fr_1fr]">
        <div>
          <Link to={ROUTES.HOME} className="font-display text-base font-bold text-text-primary">
            <span className="text-accent">Interview</span>Hub
          </Link>
          <p className="mt-3 max-w-sm text-sm text-text-secondary">
            A collection of frontend interview experiences from real developers. All credit goes
            to the original authors.
          </p>
          <div className="mt-4 flex items-center gap-4 text-text-tertiary">
            <a href="#" aria-label="GitHub" className="transition-colors hover:text-text-primary">
              <FaGithub size={18} />
            </a>
            <a href="#" aria-label="X (formerly Twitter)" className="transition-colors hover:text-text-primary">
              <FaXTwitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-text-primary">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-text-tertiary">
            Links
          </h3>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              to={ROUTES.HOME}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Companies
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-[1040px] px-6 py-4 text-xs text-text-tertiary">
          © {year} Frontend Interview Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
