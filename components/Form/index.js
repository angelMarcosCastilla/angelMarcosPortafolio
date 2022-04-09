import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import style from "./form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const url = `https://formspree.io/f/mlezpeql`
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(url, config)
      .then(res => res.json())
      .then(data => {
        if(data.ok){
          resetField('email')
          resetField('subject')
          resetField('message')
          alert("se envio el correo")
        }
      })
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.formGroup}>
        <label className={style.formLabel}> Correo: </label>
        <input
          type="email"
          className={style.formInput}
          {...register("email", { required: true })}
          placeholder=""
        />
        {errors.email && <ErrorMessage />}
      </div>
      <div className={style.formGroup}>
        <label className={style.formLabel}> Asunto: </label>
        <input
          className={style.formInput}
          {...register("subject", { required: true })}
        />
        {errors.subject && <ErrorMessage />}
      </div>
      <div className={style.formGroup}>
        <label className={style.formLabel}> Mensaje: </label>
        <textarea
          className={`${style.formInput} ${style.textArea}`}
          {...register("message", { required: true })}
        />
        {errors.message && <ErrorMessage />}
      </div>

      <button className={style.button}>Enviar mensaje</button>
    </form>
  );
}
