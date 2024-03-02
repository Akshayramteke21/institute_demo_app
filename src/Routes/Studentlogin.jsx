import React from 'react';
import "../Components/CSS/Studentloginstyle.css";
import login from "../Images/logo/login.jpg"
function Studentlogin() {
  return (
    

    
    
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-lg-4 d-none mr-1 d-lg-flex align-items-center" >
              <img src={login}  alt="login"  
                class="w-100 rounded-t-3 rounded-tr-lg-1 rounded-bl-lg-3" />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-2 px-md-5">

                <form>
                 
                  <div class="form-outline mb-3">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                  </div>

              
                  <div class="form-outline mb-3">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                  </div>

                  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  
    
  
   
  );
}

export default Studentlogin;
