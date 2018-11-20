import React from 'react'
import Stack from '../Stack/Stack'
import './Player.css'

const player = (props) => {
  return (
    <div className="Player">
      <Stack card="6A"></Stack>
      <Stack card="7C"></Stack>
      <Stack card="#"></Stack>
      <Stack card="#"></Stack>
      <Stack card="#"></Stack>
    </div>
  )
}

export default player