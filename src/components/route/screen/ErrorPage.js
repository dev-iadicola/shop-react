import React from 'react';

const ErrorPage = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center ">
      <div className="container">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">The page you're looking for doesn't exist or an error occurred.</p>
        <a href="/" className="btn btn-primary mt-4">Go Back Home</a>
      </div>
    </section>
  );
}

export default ErrorPage;
