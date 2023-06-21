import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row, Stack} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'
import fotoEntertainer from '../assets/images/entertainment/frazky.jpg'

const Entertainment = () => {
  return (
    <>
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
                          Entertainment
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="entertain-container">
                    <div className="entertain-wrapper d-flex justify-content-center align-items-center">
                      <div className="entertain-info" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
                        <img src={fotoEntertainer}></img>
                        <h5 className="entertain-name text-center">Frazky Project</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </section>
      <NavigationBar />
    </>
  )
}

export default Entertainment