import './CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLs';

function CPAdmin() {
  
  const [ opass , setOldPassword ] = useState();
  const [ npass , setNewPassword ] = useState();
  const [ cnpass , setConfirmNewPassword ] = useState();  
  const [ output , setOutput ] = useState();
  
  const handleSubmit=()=>{
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then((response)=>{
        if(response.data.length!=0)
        {
            if(npass==cnpass)
            {
                let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":cnpass}};
                axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
                    setOutput("Password changes successfully")
                    setOldPassword("");
                    setNewPassword("");
                    setConfirmNewPassword("");
                }).catch((err)=>{
                    console.log(err);
                });
            }
            else
            {
                setOutput("New & Confirm new password mismatch");
                setConfirmNewPassword("");
            }        
        }   
        else
        {
            setOutput("Invalid old password");
            setOldPassword("");
        } 
    });    
  }

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">
Change <span class="text-primary">Password Here!!!</span></h1>

<font style={{"color":"blue"}}>{output}</font>
<form>
    <div class="form-group">
      <label for="pwd">Old Password:</label>
      <input type="password" class="form-control" value={opass} onChange={e => setOldPassword(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="newpwd">New Password:</label>
      <input type="password" class="form-control" value={npass} onChange={e => setNewPassword(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="cpwd">Confirm New Password:</label>
      <input type="password" class="form-control" value={cnpass} onChange={e => setConfirmNewPassword(e.target.value)} />
    </div>
    <br/>
    <button type="button" onClick={handleSubmit} class="btn btn-success">Change Password</button>
</form>

            </div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default CPAdmin
