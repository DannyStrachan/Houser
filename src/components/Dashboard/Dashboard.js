import React, { Component } from 'react';
import axios from 'axios';
import '../../../src/App.css';
import { HashRouter, Link } from "react-router-dom";
import House from "../House/House";


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios
          .get(`api/houses`)
          .then(res => {
            this.setState({
              houses: res.data
            });
          });
      }

   

    render() {
        this.houses = this.houses.state.bind(this)
        
        return (
            <HashRouter>
                <div className="Dashboard">
                    <div className="Dashboard-header">
                        <h1>Dashboard</h1>
                        <Link to="/wizard" className="links">
                        <button className="Add-complete" type="button">
                        Add New Property
                        </button>
                        </Link>
                    </div>
                    <div className="Dashboard-content">
                        
                        <House houses = {this.houses}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}


export default Dashboard
