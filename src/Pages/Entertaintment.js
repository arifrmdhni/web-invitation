import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import fotoEntertainer from '../assets/images/entertainment/frazky.jpg'

const Entertainment = () => {
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
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
    </div>
    <NavigationBar />
    </>
  )
}
export default Entertainment