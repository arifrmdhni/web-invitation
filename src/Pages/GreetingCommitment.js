import React, { useRef } from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import axios from "axios"

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
    document.querySelectorAll(".select-wrapper, .text-input").forEach((element) => {
      element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
          event.target.nextElementSibling.classList.add("filled");
        } else if (event.target.value == "") {
          event.target.nextElementSibling.classList.remove("filled");
        }
      });
    });
    document.querySelectorAll(".question-wrapper, .text-input").forEach((element) => {
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
  const [user_nip, setUserNip] = useState('');
  const [unit_kerja, setUnitKerja] = useState('');
  const [posisi, setPosisi] = useState('');
  const [answer_1, setAnswer1] = useState('');
  const [answer_2, setAnswer2] = useState('');
  const [answer_3, setAnswer3] = useState('');
  const [answer_4, setAnswer4] = useState('');
  const [answer_5, setAnswer5] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

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

    const data = {
      Nama: user_name,
      NIP: user_nip,
      Unit_Kerja: unit_kerja,
      Posisi: posisi,
      Answer_1: answer_1,
      Answer_2: answer_2,
      Answer_3: answer_3,
      Answer_4: answer_4,
      Answer_5: answer_5,
      Date: date.toLocaleDateString(),
      Time: time.toLocaleTimeString()
    }
    axios.post('https://sheet.best/api/sheets/14bc1db8-be0d-446e-95a4-7fbe9896584f', data).then((response) => {
      setUserName('')
      setUserNip('')
      setUnitKerja('')
      setPosisi('')
      setAnswer1('')
      setAnswer2('')
      setAnswer3('')
      setAnswer4('')
      setAnswer5('')
      setDate('')
      setTime('')
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
              Survey Kepuasan Pelatihan
            </h5>
          </div>
        </div>
      </div>
      <section>
        <div id="outside" className="form-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
          <form id="survey-form" ref={form} onSubmit={sendEmail}>

            <fieldset>
              <legend>Personal Detail</legend>
              <div className="input-container">
                <input className="text-input" type="hidden" name="from_name" value={"BTN E-Invitation"}></input>

                <input onChange={(e) => {setUserName(e.target.value); handleInputType()}} className="text-input" type="text" id="nama" autoComplete="off" htmlFor="nama" name="user_name" value={user_name} required></input>
                <label className="label">Nama</label>
              </div>
              <div className="input-container">
                <input onChange={(e) => {setUserNip(e.target.value); handleInputType()}} className="text-input" type="text" id="nip" autoComplete="off" htmlFor="nip" name="user_nip" value={user_nip} required></input>
                <label className="label">NIP</label>
              </div>
              <div className="input-container">
                <input onChange={(e) => {setUnitKerja(e.target.value); handleInputType()}} className="text-input" type="text" id="unitkerja" autoComplete="off" htmlFor="unitkerja" name="unit_kerja" value={unit_kerja} required></input>
                <label className="label">Unit Kerja</label>
              </div>
              <div className="input-container">
                <input onChange={(e) => {setPosisi(e.target.value); handleInputType()}} className="text-input" type="text" id="posisi" autoComplete="off" htmlFor="posisi" name="posisi" value={posisi} required></input>
                <label className="label">Posisi</label>
              </div>
            </fieldset>
            <fieldset>
            <legend>Pertanyaan:</legend>
            <div className="input-container">
              <div className="question-wrapper">
              <label className="title-question">1. <span className="text-indent">Apakah Anda puas dengan pelatihan media handling hari ini</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer1(e.target.value); }} type="radio" name="answer_1" value="Puas" required/> Puas
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer1(e.target.value); }} type="radio" name="answer_1" value="Kurang Puas"/> Kurang Puas
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer1(e.target.value); }} type="radio" name="answer_1" value="Tidak Puas"/> Tidak Puas
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">2. <span className="text-indent">Apakah materi pelatihan media handling, bermanfaat untuk Anda?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer2(e.target.value); }} type="radio" value="Sangat Bermanfaat" name="answer_2" required/> Sangat Bermanfaat
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer2(e.target.value); }} type="radio" value="Tidak" name="answer_2" /> Tidak
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">3. <span className="text-indent">Apa materi yang menurut Anda bermanfaat?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Bagaimana menjadi juru bicara yang baik" name="answer_3" required/> Bagaimana menjadi juru bicara yang baik
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Bagaimana membina hubungan dengan media massa" name="answer_3" /> Bagaimana membina hubungan dengan media massa
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Bagaimana membuat pemberitaan yang layak diangkat media massa" name="answer_3" /> Bagaimana membuat pemberitaan yang layak diangkat media massa
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">4. <span className="text-indent">Siapa pembicara favorit Anda?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer4(e.target.value); }} type="radio" value="Arya Sinulingga" name="answer_4" required/> Arya Sinulingga
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer4(e.target.value); }} type="radio" value="Wendiyanto Saputro" name="answer_4" /> Wendiyanto Saputro
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer4(e.target.value); }} type="radio" value="Febrina Siahaan" name="answer_4" /> Febrina Siahaan
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">5. <span className="text-indent">Apa yang perlu ditingkatan ke depan untuk pelatihan ini?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Durasi Pelatihan" name="answer_5" required/> Durasi Pelatihan
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Materi yang lebih beragam" name="answer_5" /> Materi yang lebih beragam
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Pembicara" name="answer_5" /> Pembicara
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
            {/* <div className="input-container">
              <textarea onChange={(e) => {setMessage(e.target.value); handleInputType()}} className="text-input" id="saran" name="message" value={message} rows={10} cols={30} style={{resize: "none"}}></textarea>
              <label className="label" htmlFor="saran">Saran dan Masukan</label>
            </div> */}
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
