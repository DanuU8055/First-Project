import './ViewCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../apiURLs';
import { Link } from 'react-router-dom';

function ViewCategory() {

    const [cList , setCatList] = useState([]);

    useEffect(()=>{
      axios.get(_apiurlcategory+"fetch").then((response)=>{
          setCatList(response.data); 
      })
    });
    

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Auction List <span class="text-primary"> >> Category</span></h1>

<center>
<div id="catmain">
{
 cList.map((row)=>(
    <div class="catpart">
    <Link to={"/viewsubcategory/"+(row.catnm)} >
    <img src={"assets/uploads/caticons/"+(row.caticonnm)} height="100" width="150" />
    <br/>
    <b>{row.catnm}</b>
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

export default ViewCategory;


