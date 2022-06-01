import React, { Component } from 'react';
import { Card } from 'reactstrap';
import property_search from "../images/property_search.png";
import CustomerPage from './CustomerPage';
import Header from './Header';
import SearchPropertyByCriteria from '../services/SearchPropertyByCriteria';
import Footer from './Footer';
class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      config: 'flat',
      offer: 'sell',
      city: 'Ahmedabad',
      minCost: '',
      maxCost: '',

      property: []
    }
    this.searchProperty = this.searchProperty.bind(this);
    this.listOfProperties = this.listOfProperties.bind(this);
    this.myProperties = this.myProperties.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.logout = this.logout.bind(this);

    this.criteriaHandler = this.criteriaHandler.bind(this)
    this.handleConfig = this.handleConfig.bind(this)
    this.handleOffer = this.handleOffer.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleMincost = this.handleMincost.bind(this)
    this.handleMaxcost = this.handleMaxcost.bind(this)
    this.changeHandlerSerach = this.changeHandlerSerach.bind(this)
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


  criteriaHandler = (e) => {

  }
  changeHandlerSerach = (e) => {
    e.preventDefault();
    let criterias = { config: this.state.config, offer: this.state.offer, city: this.state.city, minCost: this.state.minCost, maxCost: this.state.maxCost };
    console.log('criterias => ' + JSON.stringify(criterias));
    SearchPropertyByCriteria.searchProperty(criterias).then(res => {
      this.setState({ property: res.data });

      console.log(res.data)
      console.log('properties => ' + JSON.stringify(res.data))
      //this.props.history.push("/signin");
      //console.log(res.data.map(a => a.city))
      //res.data.map(a =><h1> a.city</h1>)

      //this.props.history.push("/search1");
    });
    // console.warn(this.state.name,this.state.email,this.state.password,this.state.mobile,this.state.role,this.state.city)

  }

  handleConfig = e => {
    this.setState({
      config: e.target.value
    })
  }

  handleOffer = e => {
    this.setState({
      offer: e.target.value
    })
  }

  handleCity = e => {
    this.setState({
      city: e.target.value
    })
  }

  handleMincost = e => {
    this.setState({
      minCost: e.target.value
    })
  }

  handleMaxcost = e => {
    this.setState({
      maxCost: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Header /><br /><br /><br />

        <button class='btn btn-success' onClick={this.searchProperty}>Search Property</button>
        <button class="btn btn-danger" onClick={this.listOfProperties}>List of Properties</button>
        <button class="btn btn-info" onClick={this.myProperties}>My Properties</button>
        <button class='btn btn-success' onClick={this.updateDetails}>Update my details</button>
        <button class="btn btn-danger" onClick={this.logout}>Logout</button>
        <br />
        <br />

        <div class='card'>


          <div class='container'>
            <div class="d-flex justify-content-around">
              <div class="row">
                <img src={property_search} width="300px" height="500px"></img>
              </div>
            </div>
            <div class="d-flex justify-content-around">

              <div class="col">
                <h4>Enter Property Criteria</h4>

                <form onSubmit={this.criteriaHandler}>
                  <div class="container text-center">
                    <div>
                      <label for="configuration">Configuration</label>
                      <select name='configuration' id='configuration' value={this.state.config} onChange={this.handleConfig} style={{ marginLeft: '.5rem' }}>
                        <option value='flat'>Flat</option>
                        <option value='shop'>Shop</option>
                        <option value='plot'>Plot</option>
                      </select><br />

                      <br />

                    </div>
                    <div>
                      <label for='offerType'>Offer Type</label>
                      <select name='offerType' id='offerType' value={this.state.offer} onChange={this.handleOffer} style={{ marginLeft: '.5rem' }}>
                        <option value='sell'>Sell</option>
                        <option value='rent'>Rent</option>
                      </select><br />
                      <br />
                    </div>
                    <div>
                      <label for='city'>City</label>
                      <select name='city' id='city' value={this.state.city} onChange={this.handleCity} style={{ marginLeft: '.5rem' }}>
                        <option value='ahmedabad'>Ahmedabad</option>
                        <option value='bengaluru'>Bengaluru</option>
                        <option value='Bhopal'>Bhopal</option>
                        <option value='chennai'>Chennai</option>
                        <option value='delhi'>Delhi</option>
                        <option value='guwahati'>Guwahati</option>
                        <option value='hyderabad'>Hyderabad</option>
                        <option value='jaipur'>Jaipur</option>

                        <option value='kanpur'>Kanpur</option>
                        <option value='kochi'>Kochi</option>
                        <option value='kolkata'>Kolkata</option>
                        <option value='lucknow'>Lucknow</option>
                        <option value='mumbai'>Mumbai</option>
                        <option value='nagpur'>Nagpur</option>
                        <option value='noida'>Noida</option>
                        <option value='patna'>Patna</option>
                        <option value='pune'>Pune</option>
                        <option value='vizag'>Vizag</option>
                      </select><br />
                      <br />
                    </div>
                    <div>
                      <label for='minimumCost'>Minimum Cost</label>
                      <input type='text' placeholder='Enter minimum cost' value={this.state.minCost} onChange={this.handleMincost} style={{ marginLeft: '.5rem' }} required /><br />
                      <br />
                      <div>
                        <label for='maximumCost'>Maximum Cost</label>
                        <input type='text' placeholder='Enter maximum cost' value={this.state.maxCost} onChange={this.handleMaxcost} style={{ marginLeft: '.5rem' }} required /><br />
                        <br />

                        {/* <label for="role"> Choose a role</label>
                      <select name='role' id='role' style={{ marginLeft: '.5rem' }}>
                        <option value='customer'>Customer</option>
                        <option value='broker'>Broker</option>
                      </select><br /> */}
                      </div>
                      <br />
                      <button class='btn btn-success' onClick={this.changeHandlerSerach} >Search</button>
                    </div>

                  </div>
                </form>

              </div>
              <div class='col'>
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
                            </div>

                          </>
                        )

                      })
                  }
                </div>
              </div>




            </div>
          </div>
        </div>

        <br/>
        <Footer/>
      </div>
    )
  }
}

export default Search;