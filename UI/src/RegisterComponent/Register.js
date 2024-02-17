import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLs';

function Register() {
  
  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();     
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();  
      
  const handleSubmit=()=>{
      var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}
      
      axios.post(_apiurluser+"save",userDetails).then((response)=>{
        setOutput(response.data.result);
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
      }).catch((err)=>{
        console.log(err);
      })
  }

  return (
<div>
{/* About Start */}
<div class="container-fluid py-6 px-5">
<div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Register <span class="text-primary">Here!!!</span></h1>
<font style={{"color":"blue"}}>{output}</font>
<form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)}  />
    </div>
    <br/>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="mobile">Mobile:</label>
      <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="address">Address:</label>
      <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
    </div>
    <br/>
    <div class="form-group">
      <label for="city">City:</label>
      <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
      <option>Select City</option>
      <option>Indore</option>
      <option>Ujjain</option>
      <option>Bhopal</option>    
      </select>
    </div>
    <br/>
    <div class="form-group">
      <label for="gender">Gender:</label>
      Male <input type="radio" value="male" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
      Female <input type="radio" value="female" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
    </div>
    <br/>
    <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>
</div>
</div>
</div>
{/* About End */}    
</div>
  );
}

export default Register;
