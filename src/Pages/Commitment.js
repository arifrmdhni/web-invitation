import React, { useState, useEffect } from "react"
import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import ButtonMatery from "../Components/ButtonMatery"
import ButtonGallery from "../Components/ButtonGallery"

const Commitment = () => {
    
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
                    <div className="card-invite">
                      <p className="invite-text invite-text-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">Statement of Commitment</p>
                    </div>
                    <div className="card-invite d-flex justify-content-center align-items-center card-invite-commitment">
                      <div className="invite-title-wrapper text-description-wrapper">
                        <h6 className="invite-title invite-text-description" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="0">
                        “Kami segenap Jajaran Pimpinan Bank BTN berkomitmen untuk mendukung keberhasilan Internalisasi Budaya Bank BTN dan menjadi panutan bagi seluruh BTNers dalam menjalankan nilai-nilai AKHLAK dan penerapan program Internalisasi Budaya  Bank BTN”
                        </h6>
                      </div>
                    </div>
                    <div className="button-commitment-wrapper" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
                      <ButtonMatery name="Download Materi"></ButtonMatery>
                      <ButtonGallery name="Download Gallery"></ButtonGallery>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <NavigationBar></NavigationBar>
        </section>
        </>
    )
}
export default Commitment