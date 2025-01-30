import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [year, setYear] = useState('');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <h4>Eric Sentongo</h4>
                        <small className="d-block mb-3 text-muted">2014 - {year}</small>
                    </div>
                    <div className="col-6 col-md">
                    </div>
                    <div className="col-6 col-md">
                        <h5>My Resume</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1y8kQvNeqkDiJpr0agtWb6vC0TtR8hqhrgucqC4eDSUw/edit?usp=sharing">View Resume</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Profiles</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://github.com/r1z11" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a className="text-muted" href="https://www.linkedin.com/in/eric-sentongo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="text-muted" href="https://www.linkedin.com/in/eric-sentongo/" target="_blank" rel="noopener noreferrer">Pluralsight</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;