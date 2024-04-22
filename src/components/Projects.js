import React from 'react';

const Projects = ({ projects, category, sequence }) => {

    return (
        <>
            {
                projects.map((item, index) => (
                    <>
                        {item.category === category ?
                            <div key={category + '-' + index} className="col-md-6 my-3 pl-3">
                                <div className={(sequence.indexOf(index) !== -1) ? "bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" : "bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"}>
                                    <div className="my-3 py-3">
                                        <h2 className="display-5">{item.name}</h2>
                                        <p className="lead">{item.description}</p>
                                    </div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer"><img className="shadow-lg" style={styles.box} src={item.image} alt={item.alt} /></a>
                                </div>
                            </div> : null}
                    </>
                ))
            }
        </>
    );
}

const styles = {
    box: {
        width: '100%',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    },
}

export default Projects;