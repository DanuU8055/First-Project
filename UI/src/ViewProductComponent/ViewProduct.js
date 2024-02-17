import './ViewProduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory, _apiurlproduct } from '../apiURLs';
import { Link , useParams } from 'react-router-dom';


function ViewProduct() {

    const params=useParams();
    const [pList , setPList] = useState([]);

    useEffect(()=>{
      axios.get(_apiurlproduct+"fetch?catnm="+params.catnm+"&subatnm="+params.subcatnm).then((response)=>{
          setPList(response.data); 
      });
    });
    

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Auction List <span class="text-primary">{ ">>"} { params.catnm } { ">>"}  { params.subcatnm }</span></h1>
<center>
<div id="catmain">
{
 pList.map((row)=>(
    <div>
    <table border="1" height="150px" width="100%">
    <tr>
    <td width="35%" rowspan="3">
    <center>
    <img src={"../../assets/uploads/producticons/"+(row.piconnm)} height="100" width="150"/>
    </center>
    </td>
    <td><b>Product Title : {row.ptitle}</b></td>    
    </tr>
    <tr>
    <td><b>Product Description : {row.description}</b></td>    
    </tr>
    <tr>
    <td>
    <b>Base Price : &#8377;{row.baseprice}</b>
    <br/>
    { Date.now()-row.info<172800000 && <a><Link style={{"color":"orange"}} to={"/bidproduct/"+(row._id)} >Bid Running</Link></a>}
    { Date.now()-row.info>172800000 && <a><Link style={{"color":"green"}} to={"/showbid/"+(row._id)} >Bid Completed</Link></a>} 

    </td>    
    </tr>
    </table>     
    <br/><br/>
    </div>
 ))    
}
</div>
</center>

</div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default ViewProduct;


