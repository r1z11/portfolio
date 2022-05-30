import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            key: 'all'
        };
    }

    // Manage tab displayed
    setKey(key) {
        this.setState({ key: key })
    }

    render() {

        return (
            <div>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Hi, i'm Eric</h1>
                        <p className="lead font-weight-normal">and this is what I do...</p>
                        {/* <a className="btn btn-outline-secondary" href="#">Coming soon</a> */}
                    </div>
                    {/* <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Cross Platform App development</h2>
                            <p className="lead">I build mobile apps for both IOS and Android. Desktop applications for Windows, Linux and Mac</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/apps.png')} alt="cross-platform-apps-icon" width="300" height="300" />
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Web Applications</h2>
                            <p className="lead">I build web applications for small, medium and large businesses.</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/web-apps.png')} alt="web-apps-icon" width="300" height="300" />
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Search Engine Optimisation</h2>
                            <p className="lead">I optimise websites to rank higher in search engine results.</p>
                        </div>
                        <div className="shadow-sm mx-auto" style={styles.box}><img className="img-responsive" src={require('../assets/images/seo.png')} alt="seo-icon" width="300" height="300" /></div>
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Web Design</h2>
                            <p className="lead">I design and develop responsive websites.</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/websites.png')} alt="website-design-icon" width="300" height="300" />
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">RESTful APIs</h2>
                            <p className="lead">I build RESTful APIs.</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/restful-apis.png')} alt="restful-apis-icon" width="300" height="300" />
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Web Hosting</h2>
                            <p className="lead">I provide hosting for websites, web applications and APIs</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/web-hosting.png')} alt="web-hosting-icon" width="300" height="300" />
                    </div>
                </div>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Some of my awesome work</h1>
                        <p className="lead font-weight-normal">Just a few projects I have done over the years</p>
                        {/* <a className="btn btn-outline-secondary" href="#">Coming soon</a> */}
                    </div>
                    {/* <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
                </div>

                <Tabs id="controlled-tab-example" className="nav-justified" activeKey={this.state.key} onSelect={k => this.setKey(k)}>
                    {/* All */}
                    <Tab eventKey="all" title="All">

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Gardenia Spa</h2>
                                    <p className="lead">Wordpress company website</p>
                                </div>
                                <a href="http://gardeniaspaltd.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/gardenia-spa.png')} alt="gardenia-spa-ltd" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Ropani Tours</h2>
                                    <p className="lead">Wordpress tours and travel website.</p>
                                </div>
                                <a href="https://ropanitours.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ropanitours.png')} alt="hakuna-matata-keep-fit" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">UGAGRI website and ranch management system</h2>
                                    <p className="lead">CodeIgniter website and ranch management web application</p>
                                </div>
                                <a href="http://ugagri.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" /></a>
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">UG Mix Maestro app</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <img className="img-fluid" style={styles.box} src={require('../assets/images/ug-mix-maestro-2.png')} alt="ug-mix-maestro" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">The Athena Hotel</h2>
                                    <p className="lead">PHP Bootstrap website.</p>
                                </div>
                                <a href="https://www.theathenahotelug.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/athena.png')} alt="the-athena-hotel" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Breakthrough Miracle Life Ministries</h2>
                                    <p className="lead">Wordpress church website</p>
                                </div>
                                <a href="https://breakthroughmiraclelife.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/breakthrough-miracle-life.png')} alt="breakthrough-miracle-life-ministries" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">fiid</h2>
                                    <p className="lead">React Native events mobile app.</p>
                                </div>
                                <a href="https://expo.dev/@es16297/fiid" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/fiid-full-2.png')} alt="fiid" /></a>
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Tek Qubes</h2>
                                    <p className="lead">Wordpress online learning platform</p>
                                </div>
                                <a href="https://tekqubes.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/tequbes.png')} alt="ropani-hotel" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Apricot Guest House</h2>
                                    <p className="lead">Wordpress hotel website.</p>
                                </div>
                                <a href="http://apricotguesthouse.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/apricot-guest-house.png')} alt="apricot-guest-house" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotafield Schools</h2>
                                    <p className="lead">Wordpress kindergarten website</p>
                                </div>
                                <a href="http://rotafieldschools.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/rotafield-schools.png')} alt="rotafield-schools" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Bell Lager Shake n Win</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>

                                <div className="shadow-lg" style={styles.box}>
                                    <iframe width="720" height="480" src="https://www.youtube.com/embed/nQtcRtyUGU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotary eClub of Uganda Global</h2>
                                    <p className="lead">Custom wordpress online rotary club theme</p>
                                </div>
                                <a href="https://demo.rotaryeclubug.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/erotary.png')} alt="rotary-eclub-of-uganda-global" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Uganda Bankers' SACCO</h2>
                                    <p className="lead">Wordpress savings and and credit cooperative organisation website</p>
                                </div>
                                <a href="https://ugandabankersacco.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ubsacco.png')} alt="ugagri-uganda-ltd" /></a>
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">OCTA Investment Club</h2>
                                    <p className="lead">React native mobile app</p>
                                </div>
                                <a href="https://expo.dev/@es16297/octa-investment-club" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/octa-new.png')} alt="octa" /></a>
                            </div>
                        </div>
                    </Tab>

                    {/* Websites */}
                    <Tab eventKey="websites" title="Websites">

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Gardenia Spa</h2>
                                    <p className="lead">Wordpress company website</p>
                                </div>
                                <a href="http://gardeniaspaltd.com/" target="_blank" rel="noopener noreferrer"><img style={styles.box} src={require('../assets/images/gardenia-spa.png')} alt="gardenia-spa-ltd" /></a>
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotary eClub of Uganda Global</h2>
                                    <p className="lead">Custom wordpress online rotary club theme</p>
                                </div>
                                <a href="https://demo.rotaryeclubug.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/erotary.png')} alt="rotary-eclub-of-uganda-global" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotafield Schools</h2>
                                    <p className="lead">Wordpress kindergarten website</p>
                                </div>
                                <a href="http://rotafieldschools.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/rotafield-schools.png')} alt="rotafield-schools" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Apricot Guest House</h2>
                                    <p className="lead">Wordpress hotel website.</p>
                                </div>
                                <a href="http://apricotguesthouse.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/apricot-guest-house.png')} alt="apricot-guest-house" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Tek Qubes</h2>
                                    <p className="lead">Wordpress online learning platform</p>
                                </div>
                                <a href="https://tekqubes.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/tequbes.png')} alt="ropani-hotel" /></a>
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Breakthrough Miracle Life Ministries</h2>
                                    <p className="lead">Wordpress church website</p>
                                </div>
                                <a href="https://breakthroughmiraclelife.org/" target="_blank" rel="noopener noreferrer"><img className="shadow" style={styles.box} src={require('../assets/images/breakthrough-miracle-life.png')} alt="breakthrough-miracle-life-ministries" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">The Athena Hotel</h2>
                                    <p className="lead">PHP Bootstrap website.</p>
                                </div>
                                <a href="https://www.theathenahotelug.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/athena.png')} alt="the-athena-hotel" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">UGAGRI website and ranch management system</h2>
                                    <p className="lead">CodeIgniter ranch website</p>
                                </div>
                                <a href="https://movingads.co.ug/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Ropani Tours</h2>
                                    <p className="lead">Wordpress tours and website.</p>
                                </div>
                                <a href="https://ropanitours.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ropanitours.png')} alt="hakuna-matata-keep-fit" /></a>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Uganda Bankers' SACCO</h2>
                                    <p className="lead">Wordpress savings and and credit cooperative organisation website</p>
                                </div>
                                <a href="https://ugandabankersacco.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ubsacco.png')} alt="ugagri-uganda-ltd" /></a>
                            </div>
                        </div>
                    </Tab>

                    {/* Apps */}
                    <Tab eventKey="apps" title="Apps">

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Bell Lager Shake n Win</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <div className="shadow-lg" style={styles.box}>
                                    <iframe width="720" height="480" src="https://www.youtube.com/embed/nQtcRtyUGU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>

                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">fiid</h2>
                                    <p className="lead">React Native events mobile app.</p>
                                </div>
                                <a href="https://expo.dev/@es16297/fiid" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/fiid-full-2.png')} alt="fiid" /></a>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">UG Mix Maestro</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <img className="img-fluid" src={require('../assets/images/ug-mix-maestro-2.png')} alt="ug-mix-maestro" />
                            </div>

                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">OCTA Investment Club</h2>
                                    <p className="lead">React native mobile app</p>
                                </div>
                                <a href="https://expo.dev/@es16297/octa-investment-club" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/octa-new.png')} alt="octa" /></a>
                            </div>
                        </div>
                    </Tab>

                    {/* Web Apps */}
                    <Tab eventKey="web-apps" title="Web Apps">
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">UGAGRI website and ranch management system</h2>
                                <p className="lead">CodeIgniter ranch management web application</p>
                            </div>
                            <a href="http://ugagri.com" target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" /></a>
                        </div>
                    </Tab>
                </Tabs>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Love what I do?</h1>
                        <p className="lead font-weight-normal">Let's work on a project together</p>
                        <a className="btn btn-outline-secondary" href="mailto:sentongoeric@gmail.com">Get in touch</a>
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    box: {
        width: '100%',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    },
    boxApp: {
        marginTop: 38
    }
}

export default Content;