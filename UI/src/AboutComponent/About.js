import './About.css';
import Test from '../TestComponent/Test';
import { useState } from 'react';

function About() {
  const [ a , setA ] = useState(1000);
  const [ b , setB ] = useState(200);

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
                <h1>About Component</h1>
                <p>a = {a}</p>
                <p>b = {b}</p>
                <p>add = {a+b}</p>
                <hr/><hr/>
                <Test a={a} b={b} />
             </div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default About;
