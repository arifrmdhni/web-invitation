import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"

const NotFound = () => {
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite">
          <p className="invite-text invite-text-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="0"> 404 NotFound! </p>
        </div>
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default NotFound
