import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const NewLogin = () => {
const [fname,setFirstname] = useState('')
const [lname,setLastname] = useState('')
const [mail,setEmail] = useState('')
const [password,setPassword] = useState('')
const [success,setSuccess] = useState('')
const [error,setError]= useState('')
const handleSubmit = (event) => {
    event.preventDefault()
    if(fname==="" || lname==="" || mail==="" ||  password==="") {
        setError("Please Enter all fileds.")
        setSuccess("")
    }
    else {
        setSuccess("Regsitration successful.")
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
                    value={fname}
                    onChange={(event)=>setFirstname(event.target.value)}
                    on placeholder="First Name"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="lname"
                 value={lname}
                 onChange={(event)=>setLastname(event.target.value)}
                 on placeholder="Last Name"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="mail"
                 value={mail}
                 onChange={(event)=>setEmail(event.target.value)}
                 on placeholder="Email"/>
                </div>

                <div className="form-group">
                <input  type="text"
                 className="form-control"
                 id="password"
                 value={password}
                 onChange={(event)=>setPassword(event.target.value)}
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
export default NewLogin;
