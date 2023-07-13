import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"

import notFound from "../assets/images/notfound.svg"

const NotFound = () => {
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite">
          <p className="invite-text invite-text-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="0">NotFound! </p>
        </div>
        <div className="notfound-wrapper">
          <div className="notfound-content" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-duration="1000" data-aos-offset="0">
            <img src={notFound} className="notfound-img"></img>
          </div>
        </div>
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default NotFound
