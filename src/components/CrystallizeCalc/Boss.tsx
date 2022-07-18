import './Boss.css'
import React, { useState } from 'react'
import internal from 'stream'
import { idText } from 'typescript'

interface Bosses {
  boss: {
    id: number
    name: string
    image: string
  }
}

const Boss: React.FC<Bosses> = ({ boss }) => {
  return (
    <div>
      <img src={require(boss.image)}></img>
      <span className="boss_card">{boss.name}</span>
    </div>
  )
}

export default Boss
