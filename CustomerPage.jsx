import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
// import hotel from '../Vedio/hotel.mp4'
import Customer from '../images/Customer.png'
class CustomerPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.searchProperty = this.searchProperty.bind(this);
    this.listOfProperties = this.listOfProperties.bind(this);
    this.myProperties = this.myProperties.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.logout = this.logout.bind(this);
  }

  searchProperty = e => {
    this.props.history.push("/search")
  }
  listOfProperties = e => {
    this.props.history.push("/customerListProp")
  }
  myProperties = e => {
    this.props.history.push("/customerMyProp")
  }
  updateDetails = e => {
    this.props.history.push("/customerUpdate")
  }
  logout = e => {
    this.props.history.push("/signin")
  }

  render() {
    return (
      <div>
        <Header /><br /><br /><br /><br />

        <button class='btn btn-success' onClick={this.searchProperty}>Search Property</button>
        <button class="btn btn-danger" onClick={this.listOfProperties}>List of Properties</button>
        <button class="btn btn-info" onClick={this.myProperties}>My Properties</button>
        <button class='btn btn-success' onClick={this.updateDetails}>Update my details</button>
        <button class="btn btn-danger" onClick={this.logout}>Logout</button>

        {/* <div>
          <link rel="stylesheet" href="/css/video-react.css" />

          <video width="750" height="500" controls >
            <source src={hotel} type="video/mp4" />
          </video>

        </div> */}
        <div>
          <img src={Customer} width="500px" height="500px"></img>
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}
export default CustomerPage;