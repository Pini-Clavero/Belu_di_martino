import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import inicio from '../pages/inicio'
import Dance from '../pages/dance';

import '../../styles/navigationLink.css'
const NavigationLink = () => {
    return (
        <>
            <div className='navegacion_contenedor'>
                <div className="void" id="void">
                    <div className="crop">
                        <ul id="card-list" style={{ '--count': 8 }}>
                            <li>
                                <div className="card">
                                    
                                       <Link to="/dance"> <span className="model-name" data-text="DANCE">DANCE</span>  </Link> 
                                    
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <Link to="/circus">  <span className="model-name" data-text="CIRCUS">CIRCUS</span>  </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/aerealhoop">    <span className="model-name" data-text="AEREALHOOP">AEREALHOOP</span>   </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/polldance">    <span className="model-name" data-text="POLE DANCE">POLE DANCE</span>    </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/strases">      <span className="model-name" data-text="STRAPS">STRAPS</span>      </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/teacher">      <span className="model-name" data-text="TEACHER">TEACHER</span>     </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/performance">         <span className="model-name" data-text="PERFORMANCE">PERFORMANCES</span>    </Link> 
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                <Link to="/modelin">      <span className="model-name" data-text="MODELING">MODELING</span>    </Link> 
                                </div>
                            </li>
                        </ul>
                        <div className="last-circle"></div>
                        <div className="second-circle">
                        </div>

                    </div>
                    <div className="mask"></div>
                    <div className="center-circle"></div>
                </div>

            </div>
        </>
    );
};

export default NavigationLink;