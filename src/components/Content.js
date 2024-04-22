import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { services, projects } from '../constants/data';
import Projects from './Projects';

const Content = () => {

    const [key, setKey] = useState('all');

    const sequence = [0, 3, 4, 7, 8, 11, 12, 15];

    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center gradient-background">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 bold">Hi, i'm Eric</h1>
                    <p className="lead font-weight-normal">and this is what I do...</p>
                </div>
            </div>

            <div className='container pb-5'>
                <div className='row'>
                    {
                        services.map((item, index) => (
                            <div key={index} className="col-md-6 my-3 pl-3">
                                <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                                    <div className="my-3 py-3">
                                        <h2 className="display-5">{item.title}</h2>
                                        <p className="lead">{item.description}</p>
                                    </div>
                                    <img className="img-responsive" src={item.image} alt={item.alt} width="300" height="300" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center gradient-background">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 bold">Some of my work</h1>
                    <p className="lead font-weight-normal">Just a few projects I have done over the years</p>
                </div>
            </div>

            <Tabs id="controlled-tab-example" className="nav-justified" activeKey={key} onSelect={k => setKey(k)}>
                {/* All */}
                <Tab eventKey="all" title="All">

                    <div className="row">
                        {
                            projects.map((item, index) => (
                                <div key={'all-' + index} className="col-md-6 my-3 pl-3">
                                    <div className={(sequence.indexOf(index) !== -1) ? "bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" : "bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"}>
                                        <div className="my-3 py-3">
                                            <h2 className="display-5">{item.name}</h2>
                                            <p className="lead">{item.description}</p>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={item.image} alt={item.alt} /></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Tab>

                {/* Websites */}
                <Tab eventKey="websites" title="Websites">

                    <div className="row">
                        <Projects projects={projects} category='website' sequence={sequence} />
                    </div>
                </Tab>

                {/* Apps */}
                <Tab eventKey="apps" title="Apps">

                    <div className="row">
                        <Projects projects={projects} category='mobile-app' sequence={sequence} />
                    </div>
                </Tab>

                {/* Web Apps */}
                <Tab eventKey="web-apps" title="Web Apps">
                    <div className="row">
                        <Projects projects={projects} category='web-app' sequence={sequence} />
                    </div>
                </Tab>

                {/* WordPress Plugins */}
                <Tab eventKey="wp-plugins" title="WordPress Plugins">

                    <div className="row">
                        <Projects projects={projects} category='wp-plugin' sequence={sequence} />
                    </div>
                </Tab>
            </Tabs>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center gradient-background">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 bold">Love what I do?</h1>
                    <p className="lead font-weight-normal">Let's work on a project together</p>
                    <a className="btn btn-lg btn-outline-light bold" href="mailto:sentongoeric@gmail.com">Get in touch</a>
                </div>
            </div>

        </div>
    );
}

const styles = {
    box: {
        width: '100%',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    }
}

export default Content;