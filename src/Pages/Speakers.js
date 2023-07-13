import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import ramonArmando from "../assets/images/speakers/ramon-armando.png"
import ekoWaluyo from "../assets/images/speakers/eko-waluyo.png"
import aryaSinulingga from '../assets/images/speakers/arya-sinulingga.png'
import febrinaSiahaan from "../assets/images/speakers/febrina-siahaan.png"
import chiefKumparanBisnis from '../assets/images/speakers/chief_kumparan_bisnis.jpeg'

const Speakers = () => {
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite d-flex justify-content-center align-items-center">
          <div className="invite-text-wrapper invite-text-wrapper-mobile">
            <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold", marginBottom: "32px"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="0">
              Narasumber
            </h5>
          </div>
        </div>
        <div className="speakers-container mb-6">
          <div className="speakers-wrapper">
            <div className="speakers-info d-flex justify-content-center fade-in-right" >
              <img src={aryaSinulingga}></img>
              <div className="speakers-detail d-flex justify-content-center">
                <p className="speakers-name">Arya Sinulingga</p>
                <p className="speakers-position">Staf Khusus III Menteri BUMN</p>
              </div>
            </div>
            <div className="speakers-info d-flex justify-content-center fade-in-left" >
              <div className="speakers-detail d-flex justify-content-center">
                <p className="speakers-name">Eko Waluyo</p>
                <p className="speakers-position">Direktur Human Capital, Compliance, and Legal</p>
              </div>
              <img src={ekoWaluyo}></img>
            </div>
            <div className="speakers-info d-flex justify-content-center fade-in-right" >
              <img src={ramonArmando}></img>
              <div className="speakers-detail d-flex justify-content-center">
                <p className="speakers-name">Ramon Armando</p>
                <p className="speakers-position">Corporate Secretary Division Head</p>
              </div>
            </div>
            <div className="speakers-info d-flex justify-content-center fade-in-left" >
              <div className="speakers-detail d-flex justify-content-center">
                <p className="speakers-name">Febrina Siahaan</p>
                <p className="speakers-position">Professional Consultant in Media & Communication</p>
              </div>
              <img src={febrinaSiahaan}></img>
            </div>
            <div className="speakers-info d-flex justify-content-center fade-in-right" >
              <img src={chiefKumparanBisnis}></img>
              <div className="speakers-detail d-flex justify-content-center">
                <p className="speakers-name">M. Wendiyanto Saputra</p>
                <p className="speakers-position">Chief of KumparanBisnis</p>
              </div>
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
    </div>
    <NavigationBar />
    </>
  )
}
export default Speakers