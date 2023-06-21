import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import ButtonSubmit from "../Components/ButtonSubmit"

const GreetingCommitment = () => {
  
  const handleInputType = () => {
    document.querySelectorAll(".text-input").forEach((element) => {
      element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
          event.target.nextElementSibling.classList.add("filled");
        } else if (event.target.value == "") {
          event.target.nextElementSibling.classList.remove("filled");
        }
      });
    });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_i3u71lj', 'template_c2af4xd', form.current, 'r_x4rVsYHw4TTjaTl').then((result) => {
      // alert(result.text)
      alert('message sent')
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <>
      <section>
          <div className="card-wrapper main-wrapper">
            <Container fluid className="container main-container">
              <Row>
                <Col>
                  <div className="card-header">
                    <div className="logo-wrapper">
                      <img src={logoAsean}></img>
                      <img src={logoKBUMN}></img>
                    </div>
                    <div className="logo-wrapper">
                      <img src={logoBUMN}></img>
                      <img src={logoBTN}></img>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <div className="card-invite d-flex justify-content-center align-items-center">
                      <div className="invite-text-wrapper invite-text-wrapper-mobile">
                        <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
                          Greeting Commitment
                        </h5>
                      </div>
                    </div>
                  </div>

                  <section>
                    <div className="form-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="input-container">
                          <input className="text-input" type="hidden" name="from_name" value={"BTN E-Invitation"}></input>

                          <input onChange={() => handleInputType()} className="text-input" type="text" id="nama" autoComplete="off" htmlFor="nama" name="user_name" required></input>
                          <label className="label">Nama</label>
                        </div>
                        <div className="input-container">
                          <input onChange={() => handleInputType()} className="text-input" type="text" id="nip" autoComplete="off" htmlFor="nip" name="user_nip" required></input>
                          <label className="label">NIP</label>
                        </div>
                        <div className="input-container">
                          <input onChange={() => handleInputType()} className="text-input" type="text" id="unitkerja" autoComplete="off" htmlFor="unitkerja" name="unit_kerja" required></input>
                          <label className="label">Unit Kerja</label>
                        </div>
                        <div className="input-container">
                          <textarea onChange={() => handleInputType()} className="text-input" id="saran" name="message" rows={10} cols={30} style={{resize: "none"}}></textarea>
                          <label className="label" htmlFor="saran">Saran dan Masukan</label>
                        </div>
                        <ButtonSubmit></ButtonSubmit>
                      </form>
                    </div>
                  </section>
                </Col>
              </Row>
            </Container>
          </div>
        <NavigationBar></NavigationBar>

        </section>
    </>
  )
}

export default GreetingCommitment