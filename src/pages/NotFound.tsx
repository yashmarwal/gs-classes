import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink bg-graph-paper px-6">
      <Seo
        title="Page Not Found — GS Classes"
        description="The page you're looking for doesn't exist."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <p className="font-display text-8xl font-bold bg-gradient-to-r from-primary via-primary to-warm bg-clip-text text-transparent mb-4">
          404
        </p>
        <p className="mb-6 text-xl text-ink-foreground font-semibold">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
