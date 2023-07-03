import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
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
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
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
          <div className="poi-info fade-in-effect">
            <img src={gambir}></img>
            <p className="poi-text">Stasiun Gambir</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={padmaHotel}></img>
            <p className="poi-text">Padma Hotel</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={ballRoom}></img>
            <p className="poi-text">Ballroom Pandanaran 1</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={gedongSongo}></img>
            <p className="poi-text">Gedong Songo</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={semawisResto}></img>
            <p className="poi-text">Semawis Resto</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={dKambodja}></img>
            <p className="poi-text">D'Kambodja</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={koenokoeni}></img>
            <p className="poi-text">Koenokoeni Cafe Gallery</p>
          </div>
          <div className="poi-info fade-in-effect">
            <img src={semarangIconic}></img>
            <p className="poi-text">Semarang Iconic Places</p>
          </div>
        </div>
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default PointInterest