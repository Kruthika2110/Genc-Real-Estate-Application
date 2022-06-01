import React, { Component } from 'react'
import { Card } from 'reactstrap';
import CustomerPage from './CustomerPage';
import Header from './Header';
import customerUpdate from "../images/customerUpdate.png"
import UpdateCustomer from '../services/UpdateCustomer';
import Footer from './Footer';
class CustomerUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            mobile: '',
            city: '',
            password: '',
            rePassword: '',
            role: 'customer'
        }
        this.searchProperty = this.searchProperty.bind(this);
        this.listOfProperties = this.listOfProperties.bind(this);
        this.myProperties = this.myProperties.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.logout = this.logout.bind(this);

        this.changeUpdateHandler = this.changeUpdateHandler.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMobile = this.handleMobile.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleRePassword = this.handleRePassword.bind(this)
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

    // componentDidMount(){
    //     let userId = sessionStorage.getItem("userId")
    //     UpdateCustomer.getUserById(userId).then((res)=>{
    //         let user=res.data;
    //         this.setState({
    //             name:user.name,email:user.email,mobile:user.mobile,city:user.city,password:user.password
    //         });
    //     });

    // }

    changeUpdateHandler = e => {

        if (this.state.password == this.state.rePassword) {
            e.preventDefault();
            let user = { password: this.state.password, name: this.state.name, mobile: this.state.mobile, email: this.state.email, city: this.state.city, role: this.state.role };
            console.log('user => ' + JSON.stringify(user));

            let userId = sessionStorage.getItem("userId")
            UpdateCustomer.updateUser(user, userId).then(res => {
                console.log(res.data)
                alert("Details are Updated succesfully")
            });
            // console.warn(this.state.name,this.state.email,this.state.password,this.state.mobile,this.state.role,this.state.city)


        }
        else {
            alert("Enter correct password")
        }



    }

    handleName = e => {
        this.setState({
            name: e.target.value
        });
    }
    handleEmail = e => {
        this.setState({
            email: e.target.value
        })
    }
    handleMobile = e => {
        this.setState({
            mobile: e.target.value
        })
    }
    handleCity = e => {
        this.setState({
            city: e.target.value
        })
    }
    handlePassword = e => {
        this.setState({
            password: e.target.value
        })
    }
    handleRePassword = e => {
        this.setState({
            rePassword: e.target.value
        })
    }



    render() {
        return (
            <div>
                <div>
                    <Header /><br /><br /><br />
                    <button class='btn btn-success' onClick={this.searchProperty}>Search Property</button>
                    <button class="btn btn-danger" onClick={this.listOfProperties}>List of Properties</button>
                    <button class="btn btn-info" onClick={this.myProperties}>My Properties</button>
                    <button class='btn btn-success' onClick={this.updateDetails}>Update my details</button>
                    <button class="btn btn-danger" onClick={this.logout}>Logout</button>
                    <br />
                    <br />

                    <div class="d-flex justify-content-around">
                        <div class="col">
                            <div class="row align-items-center">

                                <img src={customerUpdate} width="500px" height="500px"></img>
                            </div>
                        </div>
                        <div class='col'>
                            <div class="row align-items-center">
                            <h4>Update Your Profile</h4>
                            <form>
                                <div class="container text-center">
                                    <div>
                                        <label for='name'>Name</label>
                                        <input type='name' placeholder='Enter Name' value={this.state.name} onChange={this.handleName} style={{ marginLeft: '.5rem' }} required /><br />
                                        <br />

                                    </div>
                                    <div>
                                        <label for='email'>Email-Id</label>
                                        <input type='email' placeholder='Enter Email-id' value={this.state.email} onChange={this.handleEmail} style={{ marginLeft: '.5rem' }} required /><br />
                                        <br />
                                    </div>
                                    <div>
                                        <label for='mobile'>Mobile</label>
                                        <input type='mobile' placeholder='mobile' value={this.state.mobile} onChange={this.handleMobile} style={{ marginLeft: '.5rem' }} required /><br />
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
                                        <label for='password'>Password</label>
                                        <input type='password' placeholder='password' value={this.state.password} onChange={this.handlePassword} style={{ marginLeft: '.5rem' }} required /><br />
                                        <br />
                                    </div>
                                    <div>
                                        <label for='password'>Re-enter your Password</label>
                                        <input type='password' placeholder='password' value={this.state.rePassword} onChange={this.handleRePassword} style={{ marginLeft: '.5rem' }} required /><br />
                                        <br />
                                    </div>

                                    <br />
                                    <button class='btn btn-success' onClick={this.changeUpdateHandler}>UPDATE</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <br /><br />
                <Footer />
            </div>
        )
    }
}
export default CustomerUpdate