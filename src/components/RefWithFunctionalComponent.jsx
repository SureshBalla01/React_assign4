import {useState,useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const RefWithFunctionalComponent = () => {
const fnameRef = useRef('')
const lnameRef = useRef('')
const mailRef = useRef('')
const passwordRef = useRef('')
const [success,setSuccess] = useState('')
const [error,setError]= useState('')
const handleSubmit = (event) => {
    event.preventDefault()
    if(fnameRef.current.value==="" || lnameRef.current.value==="" || mailRef.current.value==="" || passwordRef.current.value==="") {
        setError("Please Enter all fileds")
        setSuccess("")
    }
    else {
        setSuccess("Login successful")
        setError("")
    }
}
return (
 <>
<div className='header1'><h3>Registration Form</h3></div>
            <div className='content1'>
            <form class="regform" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input  type="text"
                    className="form-control"
                    id="fname"
                    ref={fnameRef}
                    on placeholder="First Name"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="lname"
                 ref={lnameRef}
                 on placeholder="Last Name"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="mail"
                 ref={mailRef}
                 on placeholder="Email"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="password"
                 ref={passwordRef}
                 on placeholder="Password"/>
                </div>

                <button type="submit"
                 className="btn btn-primary">Register
                </button>
                <div>
                    {success?<div className="text-success">{success}</div>:null}
                    {error?<div className="text-danger">{error}</div>:null}
                </div>
           </form>
    </div>
 </>
 );
};
export default RefWithFunctionalComponent;
