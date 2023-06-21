import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row, Stack} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import fotoDirut from '../assets/images/speakers/dirut.25cb16ffad768760c800.jpg'
import fotoKomisaris from '../assets/images/speakers/komisaris.3395e33a97f16af7b9ba.jpg'
import fotoDirFinance from '../assets/images/speakers/dirfinance.036285246e98d74fb12a.jpg'
import fotoPresidentPwC from '../assets/images/speakers/marina-r-tusin.6b8f8de8c515aa06eef3.jpg'
import fotoNickArnold from '../assets/images/speakers/nick-arnold.3bb7ec84405086508680.jpeg'
import mysteryGuest from '../assets/images/speakers/mystery-guest.png'

const Speakers = () => {
  return (
    <>
      <section id="speakers">
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
                        <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold", marginBottom: "32px"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
                          Narasumber
                        </h5>
                      </div>
                    </div>

                    <div className="speakers-container">
                      <div className="speakers-wrapper">
                        <div className="speakers-info d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                          <img src={mysteryGuest}></img>
                          <div className="speakers-detail d-flex justify-content-center">
                            <p className="speakers-name">Febby Siahaan</p>
                            <p className="speakers-position">TBC</p>
                          </div>
                        </div>
                        <div className="speakers-info d-flex justify-content-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1500">
                          <div className="speakers-detail d-flex justify-content-center">
                            <p className="speakers-name">TBC</p>
                            <p className="speakers-position">Pemimpin Redaksi Antara</p>
                          </div>
                          <img src={mysteryGuest}></img>
                        </div>
                        {/* <div className="speakers-info d-flex justify-content-center">
                          <img src={fotoDirFinance}></img>
                          <div className="speakers-detail d-flex justify-content-center">
                            <p className="speakers-name">Nofry Rony Poetra</p>
                            <p className="speakers-position">Direktur Finance</p>
                          </div>
                        </div>
                        <div className="speakers-info d-flex justify-content-center">
                          <div className="speakers-detail d-flex justify-content-center">
                            <p className="speakers-name">Marina R.Tusin</p>
                            <p className="speakers-position">President Director of <span>PwC Consulting Indonesia</span></p>
                          </div>
                          <img src={fotoPresidentPwC}></img>
                        </div>
                        <div className="speakers-info d-flex justify-content-center">
                          <img src={fotoNickArnold}></img>
                          <div className="speakers-detail d-flex justify-content-center">
                            <p className="speakers-name">Nick Arnold</p>
                            <p className="speakers-position">Venture Builder & Global Marketer <span>(Sr. Advisor McKinsey & Company)</span></p>
                          </div>
                        </div> */}
                      </div>
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

export default Speakers