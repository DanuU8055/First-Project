import './ViewSubCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../apiURLs';
import { Link , useParams } from 'react-router-dom';


function ViewSubCategory() {

    const params=useParams();
    const [cList , setCatList] = useState([]);
    const [scList , setSubCatList] = useState([]);

    useEffect(()=>{
    
      axios.get(_apiurlcategory+"fetch").then((response)=>{
          setCatList(response.data); 
      })  

      axios.get(_apiurlsubcategory+"fetch?catnm="+params.catnm).then((response)=>{
          setSubCatList(response.data); 
      });
    
    });
    

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-4">        
<h1 class="display-5 text-uppercase mb-4">Category <span class="text-primary"> >></span></h1>
<ul>
{
 cList.map((row)=>(
    <li><Link to={"/viewsubcategory/"+(row.catnm)} >{row.catnm}</Link></li>    
 ))    
}


</ul>    
</div>
<div class="col-lg-8">
<h1 class="display-5 text-uppercase mb-4">Auction List <span class="text-primary"> >> { params.catnm }</span></h1>

<center>
<div id="catmain">
{
 scList.map((row)=>(
    <div class="catpart">
    <Link to={"/viewproduct/"+(row.catnm)+"/"+(row.subcatnm)} >
    <img src={"../assets/uploads/subcaticons/"+(row.subcaticonnm)} height="100" width="150" />
    <br/>
    <b style={{"color":"black"}} >{row.subcatnm}</b>
    </Link>
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

export default ViewSubCategory;


