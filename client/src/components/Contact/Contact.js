import React from 'react'

function Contact() {
    return (
        <>

<section class="Material-contact-section section-padding section-dark">
    <div class="container">

        <div class="row">

              <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <br/><br/>
                  <h1 class="section-title">Love to Hear From You</h1>
              </div>

              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p><span style={{color: '#006699'}}><bold>"Knowledge is having the right answer, 
                  Intelligence is asking the right question."</bold></span></p>
                
                <p>Blogbuilder always welcomes opprotunities/queries on our way. So please do reach out to us,
                   in case of any clarification or assistence required. </p>

                <div class="find-widget">
                 Company:  <a href="https://hostriver.ro"><span style={{color: '#006699'}}>BlogBuilder</span></a>
                </div>
                <div class="find-widget">
                 Address: <a href="#"><span style={{color: '#006699'}}>Hyderabad, India</span></a>
                </div>
                <div class="find-widget">
                  Email Us: <a href="#"><span style={{color: '#006699'}}>rkumar6821@gmail.com</span></a>
                </div>
                
                <div class="find-widget">
                  Site Author's Profile:  <a href="https://ravindra.kumar.co.in"><span style={{color: '#006699'}}>www.ravindrakumar.co.in</span></a>
                </div>
              </div>

              <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
         
                      <div class="form-group label-floating">
                        <label class="control-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                        <div class="help-block with-errors"></div>
                      </div>
                
                      <div class="form-group label-floating">
                        <label class="control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                        <div class="help-block with-errors"></div>
                      </div>
             
                      <div class="form-group label-floating">
                        <label class="control-label">Subject</label>
                        <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                        <div class="help-block with-errors"></div>
                      </div>
  
                      <div class="form-group label-floating">
                          <label for="message" class="control-label">Message</label>
                          <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
     
                      <div class="form-submit" style={{}}>
                          <button class="btn btn-common" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
                </div>

        </div>  

    </div>    
</section>




            
        </>
    )
}

export default Contact
