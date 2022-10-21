import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RefWithClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { fname: '', lname: '', mail: '', password: ''}
        this.fnameRef = React.createRef()
        this.lnameRef = React.createRef()
        this.mailRef = React.createRef()
        this.pwdRef = React.createRef()

    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.fnameRef.current.value==="" && this.lnameRef.current.value==="" && this.mailRef.current.value==="" && this.pwdRef.current.value==="") {
            alert("Please enter all fileds");
        }
        else{
        alert("Welcome " + this.fnameRef.current.value);
        }
    }
    render() {
        return(<React.Fragment>
            <div className='header1'><h3>Registration Form</h3></div>
            <div className='content1'>
            <form class="regform">
                <div className="form-group">
                    <input  type="text" className="form-control"  id="fname" placeholder="First Name" name="fname" ref={this.fnameRef} />
                </div>
                <div className="form-group">
                    <input  type="text" className="form-control"  id="lname" placeholder="Last Name" name="lname" ref={this.lnameRef} />
                </div>

                <div className="form-group">
                    <input  type="text" className="form-control"  id="mail" placeholder="Enter email" name="mail" ref={this.mailRef} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Register</button>
               
           </form>
            </div>
        </React.Fragment>)
    }
}
export default RefWithClassComponent;
