import style from "./form.module.css";

export default function Form() {
  return (
    <form className={style.form}>
      <div className={style.formGroup}>
        <label className={style.formLabel}>Nombre: </label>
        <input className={style.formInput} />
      </div>
      <div className={style.formGroup}>
        <label className={style.formLabel}>Correo: </label>
        <input className={style.formInput} />
      </div>
      <div className={style.formGroup}>
        <label className={style.formLabel}>Mensaje: </label>
        <textarea className={`${style.formInput} ${style.textArea}`} />
      </div>
      <button className={style.button}>Enviar mensaje</button>
    </form>
  );
}
