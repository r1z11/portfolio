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
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Cross Platform App development</h2>
                            <p className="lead">I make mobile apps for both IOS and Android. I build desktop apps for Windows, Linux and Mac</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/apps.png')} alt="cross-platform-apps-icon" width="300" height="300" />
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Web Applications</h2>
                            <p className="lead">I build web applications.</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/web-apps.png')} alt="web-apps-icon" width="300" height="300" />
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Search Engine Optimisation</h2>
                            <p className="lead">I optimise websites for search engines.</p>
                        </div>
                        <div className="shadow-sm mx-auto" style={styles.box}><img className="img-responsive" src={require('../assets/images/seo.png')} alt="seo-icon" width="300" height="300" /></div>
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Website Design</h2>
                            <p className="lead">I design and develop websites.</p>
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
                            <p className="lead">I provide hosting for websites, web apps, APIs</p>
                        </div>
                        <img className="img-responsive" src={require('../assets/images/web-hosting.png')} alt="web-hosting-icon" width="300" height="300" />
                    </div>
                </div>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Some of my awesome work</h1>
                        <p className="lead font-weight-normal">Just a few projects I have done over the past 6 years</p>
                        {/* <a className="btn btn-outline-secondary" href="#">Coming soon</a> */}
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
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
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/gardenia-spa.png')} alt="gardenia-spa-ltd" />
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">RoundBob travel wallet</h2>
                                    <p className="lead">React native mobile application.</p>
                                </div>
                                {/* <img className="shadow-lg" style={styles.box} src={require('../assets/images/rotafield-schools.png')} alt="rotafield-schools" /> */}
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">UGAGRI website and ranch management system</h2>
                                    <p className="lead">CodeIgniter website and ranch management web application</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" />
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">UG Mix Maestro app</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <div className="bg-light shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Moving Ads Uganda</h2>
                                    <p className="lead">Wordpress company website.</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/moving-ads-uganda.png')} alt="moving-ads-uganda" />
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Breakthrough Miracle Life Ministries</h2>
                                    <p className="lead">Wordpress church website</p>
                                </div>
                                <img className="shadow" style={styles.box} src={require('../assets/images/breakthrough-miracle-life.png')} alt="breakthrough-miracle-life-ministries" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">fiid</h2>
                                    <p className="lead">React Native events mobile application.</p>
                                </div>
                                <div className="bg-dark shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Hair Goals Extensions</h2>
                                    <p className="lead">Wordpress e-commerce website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/hair-goals-extensions.png')} alt="hair-goals-extensions" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Apricot Guest House</h2>
                                    <p className="lead">Wordpress hotel website.</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/apricot-guest-house.png')} alt="apricot-guest-house" />
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotafield Schools</h2>
                                    <p className="lead">Wordpress kindergarten website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/rotafield-schools.png')} alt="rotafield-schools" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Bell Shake n Win</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <div className="bg-dark shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotary eClub of Uganda Global</h2>
                                    <p className="lead">Wordpress online rotary club website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/rotaryeclubug.png')} alt="rotaryeclubug" />
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
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/gardenia-spa.png')} alt="gardenia-spa-ltd" />
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotary eClub of Uganda Global</h2>
                                    <p className="lead">Wordpress online rotary club website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/rotaryeclubug.png')} alt="rotaryeclubug" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Rotafield Schools</h2>
                                    <p className="lead">Wordpress kindergarten website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/rotafield-schools.png')} alt="rotafield-schools" />
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Apricot Guest House</h2>
                                    <p className="lead">Wordpress hotel website.</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/apricot-guest-house.png')} alt="apricot-guest-house" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Hair Goals Extensions</h2>
                                    <p className="lead">Wordpress e-commerce website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/hair-goals-extensions.png')} alt="hair-goals-extensions" />
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Breakthrough Miracle Life Ministries</h2>
                                    <p className="lead">Wordpress church website</p>
                                </div>
                                <img className="shadow" style={styles.box} src={require('../assets/images/breakthrough-miracle-life.png')} alt="breakthrough-miracle-life-ministries" />
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">Moving Ads Uganda</h2>
                                    <p className="lead">Wordpress company website.</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/moving-ads-uganda.png')} alt="moving-ads-uganda" />
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 p-3">
                                    <h2 className="display-5">UGAGRI website and ranch management system</h2>
                                    <p className="lead">CodeIgniter ranch website</p>
                                </div>
                                <img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" />
                            </div>
                        </div>
                    </Tab>

                    {/* Apps */}
                    <Tab eventKey="apps" title="Apps">

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Bell Shake n Win</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <div className="bg-light shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">fiid</h2>
                                    <p className="lead">React Native events mobile application.</p>
                                </div>
                                <div className="bg-dark shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                        </div>

                        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">UG Mix Maestro app</h2>
                                    <p className="lead">Android mobile game.</p>
                                </div>
                                <div className="bg-dark shadow-sm mx-auto" style={styles.box}></div>
                            </div>
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                <div className="my-3 py-3">
                                    <h2 className="display-5">RoundBob travel wallet</h2>
                                    <p className="lead">React native mobile application.</p>
                                </div>
                                <div className="bg-light shadow-sm mx-auto" style={styles.box}></div>
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
                            <img className="shadow-lg" style={styles.box} src={require('../assets/images/ugagri.png')} alt="ugagri-uganda-ltd" />
                        </div>
                    </Tab>
                </Tabs>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Love what I do?</h1>
                        <p className="lead font-weight-normal">Let's work on a project together</p>
                        <a className="btn btn-outline-secondary" href="mailto:sentongoeric@gmail.com">Get in touch</a>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>

            </div>
        );
    }
}

const styles = {
    box: {
        width: 550,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21
    }
}

export default Content;
