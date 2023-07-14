import React, { useRef } from "react"
import { useState } from "react"
// import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import axios from "axios"

import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import ButtonSubmit from "../Components/ButtonSubmit"

const Attendance = () => {
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
    document.querySelectorAll(".select-wrapper, .text-input").forEach((element) => {
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

  const [user_name, setUserName] = useState('');
  const [kantor_cabang, setKantorCabang] = useState('');
  const [user_nip, setUserNip] = useState('');
  // const [unit_kerja, setUnitKerja] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  // const [message, setMessage] = useState('');
  const [jenis_peserta, setJenisPeserta] = useState('');
  const [sesi_attendance, setSesiAttendance] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const submitAttendance = (e) => {
    e.preventDefault();
    const data = {
      Nama: user_name,
      Kantor_Cabang: kantor_cabang,
      NIP: user_nip,
      // Unit_Kerja: unit_kerja,
      Jabatan: jabatan,
      Whatsapp: whatsapp,
      Jenis_Peserta: jenis_peserta,
      Sesi_Attendance: sesi_attendance,
      // Saran_Masukan: message,
      Date: date.toLocaleDateString(),
      Time: time.toLocaleTimeString()
    }
    axios.post('https://sheet.best/api/sheets/ccfa1a93-a802-4dd6-9860-f3de675c1541', data).then((response) => {
      console.log(response)
      setUserName('')
      setKantorCabang('')
      setUserNip('')
      // setUnitKerja('')
      setJabatan('')
      setWhatsapp('')
      setJenisPeserta('')
      setSesiAttendance('')
      // setMessage('')
      setDate('')
      setTime('')
    })

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
      title: 'Attendance Submitted, dont forget to attendance again next session!'
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
              Attendance
            </h5>
          </div>
        </div>
      </div>
      <section>
        <div className="form-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
          <form ref={form} onSubmit={submitAttendance}>
            <div className="input-container">
              <input onChange={(e) => {setUserName(e.target.value); handleInputType()}} className="text-input" type="text" id="nama" autoComplete="off" htmlFor="nama" name="user_name" value={user_name} required></input>
              <label className="label" htmlFor="nama">Nama</label>
            </div>
            <div className="input-container">
              <input onChange={(e) => {setKantorCabang(e.target.value); handleInputType()}} className="text-input" type="text" id="kantor_cabang" autoComplete="off" htmlFor="kantor_cabang" name="kantor_cabang" value={kantor_cabang} required></input>
              <label className="label" htmlFor="kantor_cabang">Kantor Cabang / Wilayah</label>
            </div>
            <div className="input-container">
              <input onChange={(e) => {setUserNip(e.target.value); handleInputType()}} className="text-input" type="text" id="nip" autoComplete="off" htmlFor="nip" name="user_nip" value={user_nip} required></input>
              <label className="label" htmlFor="nip">NIP</label>
            </div>
            <div className="input-container">
              <div className="select-wrapper">
                <input onChange={(e) => {setJabatan(e.target.value); handleInputType()}} className="text-input" type="text" id="jabatan" autoComplete="off" htmlFor="jabatan" name="jabatan" value={jabatan} required></input>
                <label className="label" htmlFor="jabatan">Jabatan</label>
              </div>
              <div className="select-wrapper">
                <input onChange={(e) => {setWhatsapp(e.target.value); handleInputType()}} className="text-input" type="tel" id="whatsapp" autoComplete="off" htmlFor="whatsapp" name="whatsapp" value={whatsapp} required></input>
                <label className="label" htmlFor="whatsapp">WhatsApp</label>
              </div>
            </div>
            <div className="input-container">
              <div className="select-wrapper mobile-wrapper">
                <label className="" htmlFor="jenis">Peserta Online/Offline:</label>
                <select htmlFor="jenis" onChange={(e) => {setJenisPeserta(e.target.value); handleInputType()}} name="jenis_peserta" value={jenis_peserta} required>
                  <option htmlFor="jenis" readOnly>-- Pilih Opsi Online/Offline --</option>
                  <option htmlFor="jenis" value="online">Online</option>
                  <option htmlFor="jenis" value="offline">Offline</option>
                </select>
              </div>
              <div className="select-wrapper mobile-wrapper">
                <label className="" htmlFor="sesi">Sesi Kehadiran:</label>
                <select htmlFor="sesi" onChange={(e) => {setSesiAttendance(e.target.value); handleInputType()}} name="sesi_attendance" value={sesi_attendance} required>
                  <option htmlFor="sesi" readOnly>-- Pilih Opsi Sesi --</option>
                  <option htmlFor="sesi" value="siang">Siang</option>
                  {/* <option htmlFor="sesi" value="malam">Malam</option> */}
                </select>
              </div>
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
export default Attendance
