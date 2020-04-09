import React from 'react'
import "./contact.css"
export default function Contact() {
    return (
   
            <section id="contact" className="section-bg wow fadeInUp" style={{marginTop:"90px" ,height:"200vh" }  }>
  <div className="container">
    <div className="section-header">
      <h1 style={{fontSize:"30px"}  }   >CONTACTEZ NOUS</h1>
    </div>
    <div className=" contact-info">
      <div className="col-md-4">
        <div className="contact-address">
          <i className="ion-ios-location-outline" />
          <h3 id="adresse">ADRESSE</h3>
          <address>.............</address>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-phone">
          <i className="ion-ios-telephone-outline" />
          <h3 style={{paddingLeft:"50px",paddingRight:"50px" }  }>TÉLÉPHONE</h3>
          <p><a href="tel:+21653045249">+216 53045249</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-email">
          <i className="ion-ios-email-outline" />
          <h3>E-MAIL</h3>
          <p><a href="mailto:Cjasser580@gmail.com">Cjasser580@gmail.com</a></p>
        </div>
      </div>
    </div>
    <div className="form container-fluid">
      <div id="sendmessage">Votre message est envoyé mecri</div>
      <div id="errormessage" />
      <form action method="post" role="form" className="contactForm ">
        <div className="form-row ">
          <div></div>
          <div className="form-group ">
            <input style={{       border: "1px solid #ced4da"}  } type="text" name="name" className="form-control" id="name" placeholder="Nom" data-rule="minlen:4" data-msg="Veuillez saisir au moins 4 caractères" />
            <div className="validation" />
          </div>
          <div className="form-group ">
            <input style={{       border: "1px solid #ced4da"}  } type="email" className="form-control" name="email" id="email" placeholder=" E-mail" data-rule="email" data-msg="Veuillez saisir un e-mail valide" />
            <div className="validation" />
          </div>
        </div>
        <div className="form-group">
          <input style={{       border: "1px solid #ced4da"}  } type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Veuillez saisir au moins 8 caractères du sujet" />
          <div className="validation" />
        </div>
        <div className="form-group">
          <textarea style={{       border: "1px solid #ced4da"}  } className="form-control" name="message" rows={5} id="message" data-rule="required" data-msg="S'il vous plaît écrivez quelque chose pour nous" placeholder="Message" defaultValue={""} />
          <div className="validation" />
        
          <div className="text-center"><button type="submit" style={{height:"45px"}}><p id="button"style={{fontSize:"15px"}}>Envoyer Message</p></button></div>
        </div></form>
    </div>
  </div></section>


       
    )
}
