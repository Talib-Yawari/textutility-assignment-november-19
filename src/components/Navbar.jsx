import React from 'react';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'bg-body-tertiary' : 'navbar-dark bg-dark'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="/navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch ms-auto">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={props.modeChange} id="flexSwitchCheckDefault" />
                            <label className={`form-check-label ${props.mode === 'light' ? '' : 'text-white'}`} htmlFor="flexSwitchCheckDefault">Change Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
