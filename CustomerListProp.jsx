import React, { Component } from 'react';
import { Card } from 'reactstrap';
import property_search from "../images/property_search.png";
import CustomerPage from './CustomerPage';
import Header from './Header';
import SearchPropertyByCriteria from '../services/SearchPropertyByCriteria';
import axios from 'axios'
import Search1 from './Search1';
import ListPropertiesService from '../services/ListPropertiesService';
import CustomerCartPropService from '../services/CustomerCartPropService';
import CreatePropertyService from '../services/CreatePropertyService';
import Footer from './Footer';
class CustomerListProp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      config: 'flat',
      offer: 'sell',
      offerCost: '',
      area: '',
      city: 'Ahmedabad',
      address: '',
      street: '',
      status: '',
      brokerId: '',
      propId: '',

      key: '',

      property: []
    }
    this.searchProperty = this.searchProperty.bind(this);
    //this.listOfProperties = this.listOfProperties.bind(this);
    this.myProperties = this.myProperties.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.logout = this.logout.bind(this);

    this.changeHandlerSerach = this.changeHandlerSerach.bind(this)
    this.changeCart = this.changeCart.bind(this)
    this.changeCart1 = this.changeCart1.bind(this)
  }
  searchProperty = e => {
    this.props.history.push("/search")
  }
  // listOfProperties = e => {
  //   this.props.history.push("/customerListProp")
  // }
  myProperties = e => {
    this.props.history.push("/customerMyProp")
  }
  updateDetails = e => {
    this.props.history.push("/customerUpdate")
  }
  logout = e => {
    this.props.history.push("/signin")
  }

  changeHandlerSerach = (e) => {
    e.preventDefault();

    ListPropertiesService.get().then(res => {
      this.setState({ property: res.data });

      console.log(res.data)
      console.log('properties => ' + JSON.stringify(res.data))
    });
  }

  changeCart(propId) {


    CreatePropertyService.getPropertyById(propId).then(res => {
      console.log(res.data)
      console.log('propertyById => ' + JSON.stringify(res.data))

      this.setState({
        propId: res.data.propId,
        config: res.data.configuration,
        offer: res.data.offerType,
        offerCost: res.data.offerCost,
        area: res.data.areaSqft,
        city: res.data.city,
        address: res.data.address,
        street: res.data.street,
        status: res.data.status,
        brokerId: res.data.brokerId,
      })

      this.changeCart1();
    });

  }

  changeCart1 = (e) => {

    let customerId = sessionStorage.getItem("userId")
    let cart = { custId: customerId, propId: this.state.propId, configuration: this.state.config, offerType: this.state.offer, offerCost: this.state.offerCost, areaSqft: this.state.area, city: this.state.city, address: this.state.address, street: this.state.street, status: this.state.status, brokerId: this.state.brokerId };
    console.log('cart => ' + JSON.stringify(cart));

    CustomerCartPropService.createCart(cart).then(res => {
      console.log(res.data)
      console.log('carts => ' + JSON.stringify(res.data))
      alert("Property added to cart")
      this.props.history.push("/customerListProp");
    })
  }

  render() {
    return (
      <div>
        <Header /><br /><br /><br />
        <button class='btn btn-success' onClick={this.searchProperty}>Search Property</button>
        <button class="btn btn-danger" onClick={this.changeHandlerSerach}>List of Properties</button>
        <button class="btn btn-info" onClick={this.myProperties}>My Properties</button>
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
                              <button class='btn btn-success' onClick={() => this.changeCart(pr.propId)} >Cart</button>
                        
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
                        <td><button class='btn btn-success' onClick={() => this.changeCart(pr.propId)} >Cart</button>
                        </td>
                      </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div> */}
        <br /><br />
        <Footer />
      </div>
    )
  }
}

export default CustomerListProp;