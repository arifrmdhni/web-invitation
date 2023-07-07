import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'

import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import ButtonSubmit from "../Components/ButtonSubmit"

const GreetingCommitment = () => {

  const handleInputType = () => {
    document.querySelectorAll(".text-input").forEach((element) => {
      element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
          event.target.nextElementSibling.classList.add("filled");
        } else if (event.target.value == "") {
          event.target.nextElementSibling.classList.remove("filled");
        }
      });
    });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o98ted4', 'template_vvnvt58', form.current, 'dH4hHGCQi96S8zn9y').then((result) => {
      // alert(result.text)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Submission Delivered!'
      })
      
    }, (error) => {
      console.log(error.text)
    })

    setTimeout(function() {
      window.location.reload()
    }, 4000)
  }

  const [showLoader, setShowLoader] = React.useState(false)
  
  const onSubmit = () => {
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 1000)
  }

  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite d-flex justify-content-center align-items-center">
          <div className="invite-text-wrapper invite-text-wrapper-mobile">
            <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
              Greeting Commitment
            </h5>
          </div>
        </div>
      </div>
      <section>
        <div className="form-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <input className="text-input" type="hidden" name="from_name" value={"BTN E-Invitation"}></input>

              <input onChange={() => handleInputType()} className="text-input" type="text" id="nama" autoComplete="off" htmlFor="nama" name="user_name" required></input>
              <label className="label">Nama</label>
            </div>
            <div className="input-container">
              <input onChange={() => handleInputType()} className="text-input" type="text" id="nip" autoComplete="off" htmlFor="nip" name="user_nip" required></input>
              <label className="label">NIP</label>
            </div>
            <div className="input-container">
              <input onChange={() => handleInputType()} className="text-input" type="text" id="unitkerja" autoComplete="off" htmlFor="unitkerja" name="unit_kerja" required></input>
              <label className="label">Unit Kerja</label>
            </div>
            <div className="input-container">
              <input onChange={() => handleInputType()} className="text-input" type="text" id="posisi" autoComplete="off" htmlFor="posisi" name="posisi" required></input>
              <label className="label">Posisi</label>
            </div>
            <div className="input-container">
              <textarea onChange={() => handleInputType()} className="text-input" id="saran" name="message" rows={10} cols={30} style={{resize: "none"}}></textarea>
              <label className="label" htmlFor="saran">Saran dan Masukan</label>
            </div>
            <ButtonSubmit onSubmit={onSubmit} loading={showLoader} disabled={showLoader} />
          </form>
        </div>
      </section>
    </div>
    <NavigationBar />
    </>
  )
}
export default GreetingCommitment
