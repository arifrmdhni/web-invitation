import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row, Stack} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import gambir from '../assets/images/poi/gambir.jpg'
import padmaHotel from '../assets/images/poi/hotel-padma.jpg'
import ballRoom from '../assets/images/poi/pandanaan.jpg'
import gedongSongo from '../assets/images/poi/gedong-songo.jpg'
import semawisResto from '../assets/images/poi/semawis.jpg'
import dKambodja from '../assets/images/poi/dkambodja.jpg'
import koenokoeni from '../assets/images/poi/koenokoeni.jpg'
import semarangIconic from '../assets/images/poi/iconic.jpg'

const PointInterest = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <section id="point-of-interest">
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
                          Point of Interest
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="poi-container">
                    <div className="poi-wrapper text-center">
                      <div className="poi-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        <img src={gambir}></img>
                        <p className="poi-text">Stasiun Gambir</p>
                      </div>
                      <div className="poi-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        <img src={padmaHotel}></img>
                        <p className="poi-text">Padma Hotel</p>
                      </div>
                      <div className="poi-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1100">
                        <img src={ballRoom}></img>
                        <p className="poi-text">Ballroom Pandanaran 1</p>
                      </div>
                      <div className="poi-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1400">
                        <img src={gedongSongo}></img>
                        <p className="poi-text">Gedong Songo</p>
                      </div>
                      <div className="poi-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1700">
                        <img src={semawisResto}></img>
                        <p className="poi-text">Semawis Resto</p>
                      </div>
                      <div className="poi-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000">
                        <img src={dKambodja}></img>
                        <p className="poi-text">D'Kambodja</p>
                      </div>
                      <div className="poi-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2300">
                        <img src={koenokoeni}></img>
                        <p className="poi-text">Koenokoeni Cafe Gallery</p>
                      </div>
                      <div className="poi-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2600">
                        <img src={semarangIconic}></img>
                        <p className="poi-text">Semarang Iconic Places</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </section>
    </>
  )
}

export default PointInterest