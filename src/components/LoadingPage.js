import React, { useEffect, useState } from 'react';

const LoadingPage = () => {
    const [loadingDots, setLoadingDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const items = Array.from({ length: 12 }); // Numero di articoli vuoti


   return(
    <>
                {items.map((_, index) => (
                    <div key={index} className="">
                        <div className=" h-100">
                            <div className="card-header text-center">
                                <h2>Loading{loadingDots}</h2>
                            </div>
                            <div className="card-body text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <p className="card-text mt-3">Please wait while we load the content.</p>
                            </div>
                            <div className="card-footer text-muted text-center">
                                Loading...
                            </div>
                        </div>
                    </div>
                ))}
                </>
            )
};

export default LoadingPage;
