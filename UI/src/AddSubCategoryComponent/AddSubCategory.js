import './AddSubCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../apiURLs';

function AddSubCategory() {

    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [output , setOutput] = useState();
    const [cList , setCatList] = useState([]);

    useEffect(()=>{
      axios.get(_apiurlcategory+"fetch").then((response)=>{
          setCatList(response.data); 
      })
    });

    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('subcatnm', subCatName);
      formData.append('subcaticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiurlsubcategory+"save", formData, config).then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput("SubCategory Added Successfully....");
      });
    }
    
  return (
    <div>
    {/* About Start */}
<div class="container-fluid py-6 px-5">
<div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Add <span class="text-primary">Sub Category!!!</span></h1>

<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)} >
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
    <label for="subcatnm">Sub Category Name:</label>
    <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-warning">Add Sub Category</button>
</form>

</div>
</div>
    </div>
    {/* About End */}    
    </div>  );
}

export default AddSubCategory;
