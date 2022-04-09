import React from 'react'
import style from "./error.module.css"

export default function ErrorMessage({ message }) {
  return (
    <span className={style.error}>Requerido *</span>
  )
}
