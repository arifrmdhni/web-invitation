import NavigationBar from "../Components/NavigationBar"
import {Col, Container, Row, Stack} from "react-bootstrap"
import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'

const Event = () => {
  return (
      <>
        <NavigationBar></NavigationBar>
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
                        <p className="invite-text invite-text-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">Dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri</p>
                      </div>
                    </div>
                    <div className="card-invite d-flex justify-content-center align-items-center">
                      <div className="invite-title-wrapper">
                        <h3 className="invite-title text-break" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1000" data-aos-offset="0">
                          Pelatihan Media Handling 2023
                        </h3>
                      </div>
                    </div>
                    <div className="card-invite">
                      <h5 className="card-tagline" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1500" data-aos-offset="0">“Membangun Reputasi Perusahaan dengan Media melalui Komunikasi yang Efektif”</h5>
                    </div>

                    <div className="event-information-wrapper text-left">
                      <div className="event-information d-flex" style={{margin: "60px auto 0"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="2000" data-aos-offset="0">
                        <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TodayIcon" width={24}>
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                        </svg>
                        <p className="information-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="2000" data-aos-offset="0">
                          13 - 15 Juli 2023
                        </p>
                      </div>
                      <div className="event-information d-flex" style={{margin: "20px auto 0"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="2500" data-aos-offset="0">
                        <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlaceIcon" width={24}>
                         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                        </svg>
                        <p className="information-text">
                          Meeting Room Hotel <span>Edelweiss Room at</span><span>Wyndham Opi Hotel Palembang</span>
                        </p>
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

export default Event