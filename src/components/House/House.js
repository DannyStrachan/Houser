import React, { Component } from 'react'
import axios from 'axios';
// import axios from 'axios';


class House extends Component {
    constructor(props) {
        super(props)
        this.state = {
            house: {}
        }
    }

    componentDidMount() {
        return axios
          .get(`/api/houses/`)
          .then(res => {
            this.setState({
              house: res.data
            });
          });
      }

    render() {
        const { houses } = this.props
        return (
            <div className="Hut">
                <div className="House-box">
                    <h1>House</h1>
                    <h1>Property Name: {this.state.house.name}</h1>
                    <h1>Address: {this.state.house.address}</h1>
                    <h1>City: {this.state.house.city}</h1>
                    <h1>State: {this.state.house.state}</h1>
                    <h1>Zip: {this.state.house.zip}</h1>
                    <div>{houses}</div>
                </div>
                <button className="delete">Delete</button>
            </div>

        )
    }
}

export default House
