import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [year, setYear] = useState('');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-8 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Eric Sentongo. Crafted with passion and modern tech.
                </p>
            </div>
        </footer>
    )
}

export default Footer;