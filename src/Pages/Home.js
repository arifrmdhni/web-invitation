import React, { useState, useEffect } from "react";
import {Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import Button from "../Components/Button"



const Home = ({toggle, soundPlaying}) => {
  const navigate = useNavigate();
    return (
        <section>
          <div className="card-wrapper">
            <Container fluid className="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <Row>
                <Col>
                  <div className="card-header">
                    <div className="logo-wrapper" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                      <img src={logoAsean}></img>
                      <img src={logoKBUMN}></img>
                    </div>
                    <div className="logo-wrapper" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                      <img src={logoBUMN}></img>
                      <img src={logoBTN}></img>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <div className="card-invite">
                      <p className="invite-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-duration="2000" data-aos-offset="0">Undangan</p>
                    </div>
                    <div className="card-invite d-flex justify-content-center align-items-center">
                      <div className="invite-title-wrapper">
                        <h3 className="invite-title text-break" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="2000" data-aos-offset="0">
                          Pelatihan Media Handling 2023
                        </h3>
                      </div>
                    </div>
                    <div className="card-invite">
                      <h5 className="card-tagline" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-duration="2000" data-aos-offset="0">“Membangun Reputasi Perusahaan dengan Media melalui Komunikasi yang Efektif”</h5>
                      <p className="invite-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2500" data-aos-duration="2000" data-aos-offset="0">Kepada Yth.</p>
                      <h6 className="guest-invited" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="3000" data-aos-duration="2000" data-aos-offset="0">Tamu Undangan</h6>
                      <Button onClick={() => {
                        if (!soundPlaying) {
                          toggle()
                        }
                        navigate('main/commitment')
                      }} name="Buka Undangan"></Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
    )
}

export default Home