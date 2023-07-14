import React, { useRef } from "react"
import { useState } from "react"
// import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import axios from "axios"

import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import ButtonSubmit from "../Components/ButtonSubmit"

const Questionnaire = () => {
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
  const [kantor_cabang, setKantorCabang] = useState('');
  const [user_nip, setUserNip] = useState('');
  const [answer_1, setAnswer1] = useState('');
  const [answer_2, setAnswer2] = useState('');
  const [answer_3, setAnswer3] = useState('');
  const [answer_4, setAnswer4] = useState('');
  const [answer_5, setAnswer5] = useState('');
  const [answer_6, setAnswer6] = useState('');
  const [answer_7, setAnswer7] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const submitQuestionnaire = (e) => {
    e.preventDefault();
    const data = {
      Nama: user_name,
      Kantor_Cabang: kantor_cabang,
      NIP: user_nip,
      Answer_1: answer_1,
      Answer_2: answer_2,
      Answer_3: answer_3,
      Answer_4: answer_4,
      Answer_5: answer_5,
      Answer_6: answer_6,
      Answer_7: answer_7,
      Date: date.toLocaleDateString(),
      Time: time.toLocaleTimeString()
    }
    axios.post('https://sheet.best/api/sheets/71a8cb50-4fb2-4d27-8246-d9f1afd88224', data).then((response) => {
      console.log(response)
      setUserName('')
      setKantorCabang('')
      setUserNip('')
      setAnswer1('')
      setAnswer2('')
      setAnswer3('')
      setAnswer4('')
      setAnswer5('')
      setAnswer6('')
      setAnswer7('')
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
      title: 'Questionnaire Submitted, do not forget to do morning attendance after this message'
    })

    setTimeout(function() {
      window.location = "/main/attendance"
    }, 4000)
  }

  const [showLoader, setShowLoader] = React.useState(false)
  
  const onSubmit = () => {
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 1000)
  }

  // const [value_7, setValue7] = useState("Ya");

  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite d-flex justify-content-center align-items-center">
          <div className="invite-text-wrapper invite-text-wrapper-mobile">
            <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
              Questionnaire
            </h5>
          </div>
        </div>
      </div>
      <div id="outside" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">
        <form id="survey-form" ref={form} onSubmit={submitQuestionnaire}>
          {/* <h1 id="title-form"></h1> */}
          {/* <p id="description"></p> */}

          <fieldset>
            <legend>Personal Details</legend>
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
          </fieldset>

          <fieldset>
            <legend>Pertanyaan:</legend>
            <div className="input-container">
              <div className="question-wrapper">
              <label className="title-question">1. <span className="text-indent">Apakah Anda mengetahui apa itu media handling?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer1(e.target.value); }} type="radio" name="answer_1" value="Ya" required/> Ya
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer1(e.target.value); }} type="radio" name="answer_1" value="Tidak"/> Tidak
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">2. <span className="text-indent">Apakah Anda pernah dimintai keterangan oleh media/wartawan secara langsung terkait produk, masalah hukum serta keluhan?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer2(e.target.value); }} type="radio" value="Pernah" name="answer_2" required/> Pernah
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer2(e.target.value); }} type="radio" value="Tidak Pernah" name="answer_2" /> Tidak Pernah
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">3. <span className="text-indent">Jika pernah, apa yang Anda lakukan?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Menolak" name="answer_3" required/> Menolak
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Memberikan keterangan langsung sesuai pertanyaan" name="answer_3" /> Memberikan keterangan langsung sesuai pertanyaan
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Melemparkan otoritas menjawab ke staf/ petugas bank yang lain" name="answer_3" /> Melemparkan otoritas menjawab ke staf/ petugas bank yang lain
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Memberikan jawaban normatif" name="answer_3" /> Memberikan jawaban normatif
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer3(e.target.value); }} type="radio" value="Mengusir" name="answer_3" /> Mengusir
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">4. <span className="text-indent">Apakah Anda mengetahui media massa apa yang paling berpengaruh di wilayah/ daerah Anda?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer4(e.target.value); }} type="radio" value="Ya" name="answer_4" required/> Ya
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer4(e.target.value); }} type="radio" value="Tidak" name="answer_4" /> Tidak
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">5. <span className="text-indent">Bagaimana kesan Anda terhadap wartawan/ media?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Mitra" name="answer_5" required/> Mitra
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Musuh" name="answer_5" /> Musuh
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer5(e.target.value); }} type="radio" value="Tidak Keduanya" name="answer_5" /> Tidak Keduanya
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">6. <span className="text-indent">Apa jawaban Anda ketika ada wartawan yang ingin minta wawancara mengenai Bank BTN?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                    <input onChange={(e) => {setAnswer6(e.target.value); }} type="radio" value="Bersedia" name="answer_6" required/> Bersedia
                    </li>
                    <li>
                    <input onChange={(e) => {setAnswer6(e.target.value); }} type="radio" value="Tidak Bersedia" name="answer_6" /> Tidak Bersedia
                    </li>
                  </ul>
                </div>
              </div>
              <div className="question-wrapper">
              <label className="title-question">7. <span className="text-indent">Apakah Anda secara berkala melakukan pertemuan dengan wartawan di daerah Anda?</span></label>
                <div className="answer-wrapper">
                  <ul>
                    <li>
                      <input onChange={(e) => {setAnswer7(e.target.value); }} type="radio" value="Ya" name="answer_7" id="otherAnswer7" required/> Ya
                      {answer_7 === "" || answer_7 === "Tidak" ? <input onChange={(e) => {setAnswer7(e.target.value); }} type="text" className="input-answer hidden" name="answer_7" id="inputOtherAnswer" placeholder="seberapa sering?"/> : <input onChange={(e) => {setAnswer7(e.target.value); }} type="text" className="input-answer" name="answer_7" id="inputOtherAnswer" placeholder="seberapa sering?" required/>}
                    </li>
                    <li>
                      <input onChange={(e) => {setAnswer7(e.target.value); }} type="radio" value="Tidak" name="answer_7" id="answer7" /> Tidak
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
          <ButtonSubmit onSubmit={onSubmit} loading={showLoader} disabled={showLoader} />
        </form>
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default Questionnaire
