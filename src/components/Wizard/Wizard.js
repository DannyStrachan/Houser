import React, { Component } from 'react'
import { HashRouter, Link } from "react-router-dom";

import '../../App';


class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    render() {
        let { name, address, city, state, zip } = this.state;
        return (
            <HashRouter>
                <div className="Wizard">
                    <div className="Wizard-header">
                        <h1>Wizard</h1>
                        <Link to="/" className="links">
                            <button className="Cancel" type="button">
                                Cancel
                            </button>
                        </Link>
                    </div>
                    <div className="Edit-field">
                        <div>
                            Property Name
                        <input value={name} type="text" placeholder="Property Name" onChange={e => this.setState({ name: e.target.value })}></input>
                        </div>
                        <div>
                            Address
                        <input value={address} type="text" placeholder="Address" onChange={e => this.setState({ address: e.target.value })}></input>
                        </div>
                        <div>
                            City
                        <input value={city} type="text" placeholder="City" onChange={e => this.setState({ city: e.target.value })}></input>
                            State
                        <input value={state} type="text" placeholder="State" onChange={e => this.setState({ state: e.target.value })}></input>
                        </div>
                        <div>
                            Zip
                        <input value={zip} type="int" placeholder="Zip" onChange={e => this.setState({ zip: e.target.value })}></input>
                        </div>
                    </div>
                    <Link to="/wizard" className="links">
                        <button className="Add-complete" type="button">
                        Complete
                        </button>
                    </Link>
                </div>
            </HashRouter>
        )
    }
}


export default Wizard
