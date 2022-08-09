import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Consultas.module.css";
import Swal from "sweetalert2";

function Consultas() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06uo2tv",
        "template_w44be7d",
        e.target,
        "mTd7IZiNh6HFwlxkq"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    e.target.reset();
  };

  const messageOk = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su consulta fue enviada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.contTitleConsulta}>
        <div className={styles.contConsultaIcon}>
          <i className="small material-icons carti">email</i>
        </div>
        <div className={styles.titleConsulta}>
          <p>Dejanos tu consulta</p>
        </div>
      </div>
      <div className={styles.contForm}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />

          <label>Email</label>
          <input type="email" name="user_email" />

          <label>Mensaje</label>
          <textarea cols="30" rows="10" name="user_message"></textarea>

          <div className={styles.contSend}>
            <button onClick={messageOk}>
              <div>
                <i class="material-icons">send</i>
              </div>
              <div>Enviar</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultas;
