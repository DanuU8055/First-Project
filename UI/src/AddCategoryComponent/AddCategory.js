import './AddCategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../apiURLs';

function AddCategory() {

    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [output , setOutput] = useState();
    
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiurlcategory+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("Category Added Successfully....");
      });
    }
    
  return (
    <div>
    {/* About Start */}
<div class="container-fluid py-6 px-5">
<div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Add <span class="text-primary"> Category!!!</span></h1>

<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-warning">Add Category</button>
</form>

</div>
</div>
    </div>
    {/* About End */}    
    </div>  );
}

export default AddCategory;
