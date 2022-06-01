import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import brokerPage from "../images/brokerPage.jpg"

 class BrokerPage extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          //userId: this.props.match.params.userId
       }
       this.changeCreatePropertyHandler=this.changeCreatePropertyHandler.bind(this)
       this.changeBrokerProfileHandler=this.changeBrokerProfileHandler.bind(this)
       this.brokerPropertyHandler=this.brokerPropertyHandler.bind(this)
     }
     changeCreatePropertyHandler = () =>
     {
        this.props.history.push("/createPropertyHandler")
     }
     changeBrokerProfileHandler = () =>
     {
      //  let userId = this.state.userId;
      //   this.props.history.push("/changeBrokerProfileHandler/${userId}")
      this.props.history.push("/changeBrokerProfileHandler")
     }
     brokerPropertyHandler = () =>
     {
      this.props.history.push("/brokerProperty")
     }
  render() {
    return (
      <div>
        <Header/><br/><br/><br/>
        {/* <h4>Broker Page</h4> */}
        <br/><br/>
         <div>
             <img src={brokerPage}  height="300px"/>
         </div>
         <br/>
         <br/>
         
        <button class='btn btn-success' onClick={this.changeCreatePropertyHandler}>Create Property</button>
        <button class="btn btn-danger" onClick={this.brokerPropertyHandler}> My Property</button>
         <button class="btn btn-info" onClick={this.changeBrokerProfileHandler}> My Profile</button>
        

      </div>
    )
  }
}
export default BrokerPage;