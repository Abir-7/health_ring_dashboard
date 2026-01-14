import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-7xl font-bold text-foreground">404</h1>

      <p className="mt-4 text-xl font-medium text-foreground">Page not found</p>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
