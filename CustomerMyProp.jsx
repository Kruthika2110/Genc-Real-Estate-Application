import React, { Component } from 'react';
import { Card } from 'reactstrap';
import property_search from "../images/property_search.png";
import CustomerPage from './CustomerPage';
import Header from './Header';
import SearchPropertyByCriteria from '../services/SearchPropertyByCriteria';
import axios from 'axios'
import Search1 from './Search1';
import ListPropertiesService from '../services/ListPropertiesService';
import BrokerProperties from '../services/BrokerProperties';
import CustomerCartPropService from '../services/CustomerCartPropService';
import Footer from './Footer';
class CustomerMyProp extends Component {

  constructor(props) {
    super(props)

    this.state = {

      property: []
    }
    this.searchProperty = this.searchProperty.bind(this);
    this.listOfProperties = this.listOfProperties.bind(this);
    //this.myProperties = this.myProperties.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.logout = this.logout.bind(this);
    this.changeHandlerSerach = this.changeHandlerSerach.bind(this)
  }
  searchProperty = e => {
    this.props.history.push("/search")
  }
  listOfProperties = e => {
    this.props.history.push("/customerListProp")
  }
  // myProperties = e => {
  //   this.props.history.push("/customerMyProp")
  // }
  updateDetails = e => {
    this.props.history.push("/customerUpdate")
  }
  logout = e => {
    this.props.history.push("/signin")
  }

  changeHandlerSerach = (e) => {
    e.preventDefault();
    let custId = sessionStorage.getItem("userId")
    
    CustomerCartPropService.getCustomerCart(custId).then(res => {
      this.setState({ property: res.data });

      console.log(res.data)
      console.log('properties => ' + JSON.stringify(res.data))
    });
    // console.warn(this.state.name,this.state.email,this.state.password,this.state.mobile,this.state.role,this.state.city)

  }

 
  render() 
  {
    return (
      <div>
        <Header /><br /><br /><br />
        <button class='btn btn-success' onClick={this.searchProperty}>Search Property</button>
        <button class="btn btn-danger" onClick={this.listOfProperties}>List of Properties</button>
        <button class="btn btn-info" onClick={this.changeHandlerSerach}>My Properties</button>
        <button class='btn btn-success' onClick={this.updateDetails}>Update my details</button>
        <button class="btn btn-danger" onClick={this.logout}>Logout</button>
        <br />
        <br />

        <div class="d-flex justify-content-around">
          <div class="col">
                <div class="row align-items-center">
                  {
                    this.state.property.map(
                      pr => {
                        return (

                          <>
                            <div class="col" style={{background:"#198754-100",marginLeft:"5px",marginRight:"5px",padding:"10px",border:"1px solid black"}}>
                              <img src={property_search} class="img-thumbnail" width="500px" height="500px" alt="..." ></img>
                              <h><b>{pr.configuration}  </b></h><br/>
                              <h><b>{pr.offerType}  </b></h><br/>
                              <h><b>Cost:     {pr.offerCost}</b></h><br/>
                              <h><b>AreaSqft: {pr.areaSqft}  </b></h><br/>
                              <h><b>Address:  {pr.address}  </b></h><br/>
                              <h><b>City:     {pr.city}  </b></h><br/>
                              <h><b>Street:   {pr.street}  </b></h><br/>
                              <h><b>{pr.status}  </b></h>
                              {/* <button class='btn btn-success' onClick={() => this.removeCart(pr.propId)} >Remove</button> */}
                        
                            </div>

                          </>
                        )

                      })
                  }
                </div>
              </div>
        </div>
        {/* <div class='card'>                  
            <div className="row">
                <table className="table table-striped table-bordered">

                  <thead>
                    <tr>
                      <th> Configuration</th>
                      <th> OfferType</th>
                      <th> OfferCost</th>
                      <th> Area Sqft</th>
                      <th> City</th>
                      <th> Address</th>
                      <th> Street</th>
                      <th> Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.property.map(
                        pr =>
                          <tr key={pr.propId}>
                            <td> {pr.configuration} </td>
                            <td> {pr.offerType}</td>
                            <td> {pr.offerCost}</td>
                            <td> {pr.areaSqft}</td>
                            <td> {pr.city}</td>
                            <td> {pr.address}</td>
                            <td> {pr.street}</td>
                            <td> {pr.status}</td>
                          </tr>
                      )}
                  </tbody>
                </table>
                </div>
          </div> */}
          <br/><br/>
                <Footer/>
        </div>
        )
  }
}
        
export default CustomerMyProp;