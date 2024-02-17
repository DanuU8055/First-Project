import { Navigate , useParams } from 'react-router-dom';
import axios from 'axios';
import { _apiurluser } from '../apiURLs';

function Verifyuser() {

  const params = useParams();

  axios.get(_apiurluser+"fetch?email="+params.vemail).then((response)=>{
    var userDetails=response.data[0];
    if(userDetails.__v==0)
    {
      let updateDetails={"condition_obj":{"email":params.vemail},"set_condition":{"status":1,"__v":1}};
      axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
        console("user verified....");
      }).catch((err)=>{
        console.log(err);
      });  
    }
    else
    {
      alert("Mail verification link expired.....");
    }

  }).catch((err)=>{
    console.log(err);
  });

  return (
    <div>
    <Navigate to='/login' />
    </div>
  );
}

export default Verifyuser;
