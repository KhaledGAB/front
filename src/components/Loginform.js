import React from "react";
const Loginform = () => {
  return (
   
    <main className="image">
      <center>
        <div class="section"></div>
  
        <h5 class="indigo-text">Please, login into your account</h5>
        <div class="section"></div>
  
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row div1">
  
            <form class="col s12" >
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>
  
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' id='email' />
                  <label for='email'>Enter your email</label>
                </div>
              </div>
  
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' />
                  <label for='password'>Enter your password</label>
                </div>
             
              </div>
  
              <br />
              <center>
                <div class='row'>
                  <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue accent-4'>Login</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <a href="/signup" className="create-account">Create account</a>
      </center>
  
    </main>
  
  );
};

export default Loginform;