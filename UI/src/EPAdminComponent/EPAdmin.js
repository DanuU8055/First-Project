import './EPAdmin.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLs';

function EPAdmin() {

  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();     
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();        

  useEffect(()=>{
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setMobile(response.data[0].mobile);
        setAddress(response.data[0].address);
        setCity(response.data[0].city);
    })
  },[]);     

  const handleSubmit=()=>{
    let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
        setOutput("Profile edited successfully....");
     }).catch((err)=>{
        console.log(err);
     });
 }

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">
Edit <span class="text-primary">Profile Here!!!</span></h1>

<font style={{"color":"blue"}}>{output}</font>
<form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)}  />
    </div>
    <br/>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} readOnly />
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
      Male <input type="radio" checked value="male" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
      Female <input type="radio" value="female" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
    </div>
    <br/>
    <button type="button" onClick={handleSubmit}  class="btn btn-success">Update</button>
</form>

            </div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default EPAdmin
