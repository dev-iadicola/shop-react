import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap

const LoadingPage = () => {
  const [loadingDots, setLoadingDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const items = Array.from({ length: 6 }); // Numero di articoli vuoti

  return (
    <div className="container mt-5">
      <h2 className="text-center">Loading{loadingDots}</h2>
      <div className="row">
        {items.map((_, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-header">Article {index + 1}</div>
              <div className="card-body">
                <h5 className="card-title">Loading...</h5>
                <p className="card-text">Please wait while we load the content.</p>
              </div>
              <div className="card-footer text-muted">Loading...</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
