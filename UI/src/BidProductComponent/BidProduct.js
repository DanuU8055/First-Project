import './BidProduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory , _apiurlproduct , _apiurlbid } from '../apiURLs';
import { Link , useParams } from 'react-router-dom';

function BidProduct() {

  const params = useParams();
  const [ pDetails , setPDetails ] = useState([]);
  const [ bidprice , setBidPrice ] = useState();
  const [ output , setOutput ] = useState();
  const [ cprice , setCPrice ] = useState();

  useEffect(()=>{
    
    axios.get(_apiurlproduct+"fetch?_id="+params.pid).then((response)=>{
        setPDetails(response.data[0]); 
    })
    
    axios.get(_apiurlbid+"fetch?pid="+params.pid).then((response)=>{
      var l=response.data.length
      var p=l==0?pDetails.baseprice:response.data[l-1].bidprice;     
      setCPrice(p);
    })
  
  });
  
  const handleSubmit=()=>{
    var bidDetails={"pid":params.pid,"uid":localStorage.getItem("email"),"bidprice":bidprice};
    
    axios.post(_apiurlbid+"save",bidDetails).then((response)=>{
      setOutput(response.data.result);
      setBidPrice("");
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
<font style={{"color":"blue"}}>{output}</font>
<h1 class="display-5 text-uppercase mb-4">Bid Product <span class="text-primary">Here!!!</span></h1>
<h2>Product ID : {pDetails._id} </h2>
<br/>
<h2>Product Base Price : &#8377;{pDetails.baseprice} </h2>
<br/>
<h2>Product Current Bid Price : &#8377;{cprice} </h2>
<br/>
<form>
<h2>Enter Your Bid Price <input type="text" value={bidprice} onChange={e => setBidPrice(e.target.value)} /></h2>
<br/>
<button type="button" onClick={handleSubmit} class="btn btn-success" >Bid Your Product</button>
</form>
</div>
</div>
</div>
{/* About End */}    
</div>  );
}

export default BidProduct;
