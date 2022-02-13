import React from 'react'
import { StyleFlex } from './StyleFlex'

export default function Flex({children,...rest}) {
  return (
    <StyleFlex {...rest}>{children}</StyleFlex>
  )
}
