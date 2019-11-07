import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <div>

                <footer className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Eric Sentongo</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg> */}
                            <h4>Eric Sentongo</h4>
                            <small className="d-block mb-3 text-muted">&copy; 2013 - {this.state.year}</small>
                        </div>
                        {/* <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div> */}
                        <div className="col-6 col-md">
                            <h5>My Resume</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="../assets/docs/eric.resume.pdf">Download Resume</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Open source projects</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://github.com/r1z11/buzpos">Buz Point of Sale</a></li>
                                <li><a className="text-muted" href="https://github.com/r1z11/billboard">Billboard Law Practice Management Software</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Other Profiles</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://github.com/r1z11">GitHub</a></li>
                                <li><a className="text-muted" href="https://www.linkedin.com/in/eric-sentongo-5b17063a/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}