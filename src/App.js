import React from 'react';
import './App.css';
import aboutimage1 from './assets/img/about/01.jpg';
import aboutimage2 from './assets/img/about/1.jpeg';
import aboutimage3 from './assets/img/about/2.jpg';
import aboutimage4 from './assets/img/about/3.jpg';
import aboutimage5 from './assets/img/about/4.jpeg';
import teamimage1 from './assets/img/team/1.jpeg';
import teamimage2 from './assets/img/team/2.jpg';
import teamimage3 from './assets/img/team/3.jpeg';
import logoimage2 from './assets/img/logos/charity-word-cloud-heart-concept-260nw-371896534-removebg-preview.png'
import logoimage1 from './assets/img/logos/volunteer-2055043-removebg-preview.png';
import logoimage3 from './assets/img/logos/donate-5446344_1920.png';
import logoimage4 from './assets/img/logos/logo.png'
import portfolioimage from './assets/img/portfolio/1.jpeg';
import portfolioimage1 from './assets/img/portfolio/2.jpeg';
import portfolioimage2 from './assets/img/portfolio/3.jpg';
import portfolioimage3 from './assets/img/portfolio/4.jpeg';
import portfolioimage4 from './assets/img/portfolio/5.jpg';
import portfolioimage5 from './assets/img/portfolio/6.jpeg';
function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">THE ROYAL DIADEM CHARITY ORGANIZATION</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
            <i className="fa fa-bars"></i>
          </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Let's Help!</div>
        <div className="section-heading text-uppercase">At Royal Diadem Charity Organization, We help with cash, foodstuff, clothings, shoes, bags, underwears, stationery, toiletries</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Donate</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Stories</h2>
          <h3 className="section-subheading text-muted">At Royal Diadem Charity Organization we work hard to support vulnerable children and women with all we can by supporting them in every area they need support emotionally, financially, in business and education.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-ambulance fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Health</h4>
          <p className="text-muted">We assist in our little way to improve the health of adults by supporting them with part payment of their hospital bills.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-graduation-cap fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Education</h4>
          <p className="text-muted">We support students with school items such as learning equipment school uniforms etc and also pay for their fees into secondary school.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-child fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Support</h4>
          <p className="text-muted">We support children and adults,in our charity fairs with clothings,shoes,food etc. We also support start businesses and struggling businesses.</p>
        </div>
      </div>
    </div>
  </section>

  
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">OUR PROJECTS</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-1</h4>
                <p className='text-muted'>One of the widowers we supported with food items.</p>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage1}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-2</h4>
                <p className='text-muted'>Donating clothes to people in charity fair 2012 in a community in Mushin..</p>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage2}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-3</h4>
                <p className='text-muted'>Supporting a student who just gained admission into junior secondary school with stationeries,school uniform and school socks.</p>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage3}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-4</h4>
                <p className='text-muted'>One of the widows we supported during one of our December charity programs.</p>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage4}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-5</h4>
                <p className='text-muted'>A single mother we supported during one of our December charity programs.</p>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 portfolio-item'>
              <a className='portfolio-link' data-toggle="modal" href='#portfolio'>
              <img className='img-fluid' src={portfolioimage5}></img>
              </a>
              <div className='portfolio-caption'>
                <h4>Project-6</h4>
                <p className='text-muted'>Empowering an hair stylist with equipment to set up her business.</p>
              </div>
            </div>
          </div>
        </div>
  </section>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Diadem Charity Organization.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={aboutimage1} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>17th of December,2010</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">a Non Governmental Charity Organization, was founded by Mrs Thelma Chidinma Animasahun, a medical and psychiatry social worker. Royal Diadem Organization have recorded success over the years because of the zeal and collective efforts of people that have shared in our visions. We will continue to strengthen our commitment towards helping underprivileged people in our society.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={aboutimage2} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Mission</h4>
                  <h4 className="subheading"></h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Nigeria have quite a number of underprivileged children,widows and physically displaced persons.Royal Diadem Charity Organization was founded on the basis of helping this category of people. Service to humanity is very paramount and this is our driving force .We know that the Government can not get to every corner of the society and that’s why we took it upon ourself to take part in the building up of our society and attending to the welfare of underprivileged persons;providing them with basic amenities and giving them reasons to live as human and citizens.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src= {aboutimage3} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Objectitve</h4>
                  <h4 className="subheading"></h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">To solely affect the vulnerable children and women positively ,Intervening through any means possible by providing basic amenities ,Organizing seminars,symposium and awareness programs to keep vulnerable persons abreast of what happening in their immediate environment.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={aboutimage4} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Our Plans</h4>
                  <h4 className="subheading"></h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Support students going into junior secondary school by September ,Support 20 widows and 10 single mothers in December,Charity fair every Saturday before Christmas ,Educate the girl child ,Visit to homes/orphanage.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Team Members/Volunteers.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={teamimage1} alt=""/>
            <h4>Charity 2018</h4>
            <p className="text-muted">Coordinator and one of the board of trustees</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="mailto:diademroyal105@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://wa.me/2348162066255">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/royaldiadem_wf?igshid=54gmkpxy6ygd">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={teamimage2} alt=""/>
            <h4>Charity 2019</h4>
            <p className="text-muted">Team Members</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="mailto:diademroyal105@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://wa.me/2348162066255">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/royaldiadem_wf?igshid=54gmkpxy6ygd">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
                <img className="mx-auto rounded-circle" src={teamimage3}alt=""/>
            <h4>Charity 2019</h4>
            <p className="text-muted">Royal Diadem Charity Events</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="mailto:diademroyal105@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://wa.me/2348162066255">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/royaldiadem_wf?igshid=54gmkpxy6ygd">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-uppercase">Donation</h2>
              <p className="large text-muted">Bank Name: Zenith Bank </p>
              <p className="large text-muted">Account Name: Animasahun Thelma</p>
              <p className="large text-muted">Account Number: 2378424697.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src={logoimage1} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src={logoimage2} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src={logoimage3} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src={logoimage4} alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Royal Diadem Charity Organization.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Royal Diadem Charity" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email " required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone " required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message " required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Royal Diadem Charity Organization</span>
        </div>
        <div className="col-md-4">
        <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="mailto:diademroyal105@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://wa.me/2348162066255">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/royaldiadem_wf?igshid=54gmkpxy6ygd">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
