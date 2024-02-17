import './APUser.css';
import { useState , useEffect } from 'react';
import { _apiurlproduct , _apiurlcategory , _apiurlsubcategory } from '../apiURLs';
import axios from 'axios';

function APUser() {

  const [ output , setOutput ] = useState();
  const [ ptitle , setPTitle ] = useState();
  const [ catnm , setCatName ] = useState();
  const [ subcatnm , setSubCatName ] = useState();
  const [ description , setDescription ] = useState();
  const [ baseprice , setBasePrice ] = useState();
  const [ file , setFile ] = useState();
  const [cList , setCatList] = useState([]);
  const [scList , setSubCatList] = useState([]);

  useEffect(()=>{
    axios.get(_apiurlcategory+"fetch").then((response)=>{
        setCatList(response.data); 
    })
  });    


  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const fetchSubCategory=(catnm)=>{
    axios.get(_apiurlsubcategory+"fetch?catnm="+catnm).then((response)=>{
      setCatName(catnm);  
      setSubCatList(response.data); 
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('ptitle', ptitle);
    formData.append('catnm', catnm);
    formData.append('subcatnm', subcatnm);
    formData.append('description', description);
    formData.append('baseprice', baseprice);
    formData.append('picon', file);
    formData.append('uid', localStorage.getItem("email"));
    const config = {
        'content-type': 'multipart/form-data'
    };

    axios.post(_apiurlproduct+"save", formData, config).then((response) => {
        setPTitle("");
        setCatName("");
        setSubCatName("");
        setDescription("");
        setBasePrice("");
        setOutput("Product Added Successfully....");
      });
    }

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Add Product <span class="text-primary">Here!!!</span></h1>

<font style={{"color":"blue"}}>{output}</font>
<form>
    <div class="form-group">
      <label for="ptitle">Product Title:</label>
      <input type="text" class="form-control" value={ptitle} onChange={e => setPTitle(e.target.value)}  />
    </div>
    <br/>
    <div class="form-group">
      <label for="catnm">Category:</label>
      <select class="form-control" value={catnm} onChange={(e) => { fetchSubCategory(e.target.value) }} >
      <option>Select Category</option>
      {
       cList.map((row)=>(
        <option>{row.catnm}</option>
       ))     
      }
      </select>
    </div>
    <br/>
    <div class="form-group">
      <label for="subcatnm">Sub Category:</label>
      <select class="form-control" value={subcatnm} onChange={e => setSubCatName(e.target.value)} >
      <option>Select Sub Category</option>
      {
       scList.map((row)=>(
        <option>{row.subcatnm}</option>
       ))     
      }
      </select>
    </div>
    <br/>
    <div class="form-group">
      <label for="description">Product Description:</label>
      <textarea rows="5" class="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
    </div>
    <br/>
    <div class="form-group">
      <label for="baseprice">Base Price:</label>
      <input type="text" class="form-control" value={baseprice} onChange={e => setBasePrice(e.target.value)}  />
    </div>
    <br/>
    <div class="form-group">
    <label for="file">Product Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
    </div>
    <br/>
    <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>

            </div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default APUser;
