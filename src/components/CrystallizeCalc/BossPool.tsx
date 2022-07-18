import Boss from './Boss'
import './BossPool.css'

const bosses: Array<Boss> = [
  { id: 1, name: '자쿰', image: './src/images/1_Zaqqum.png' },
  { id: 2, name: '파풀라투스', image: './src/images/2_Papulatus.png' },
  { id: 3, name: '매그너스', image: './src/images/3_Magnus.png' },
  { id: 4, name: '힐라', image: './src/images/4_Hilla.png' },
  { id: 5, name: '혼테일', image: './src/images/5_Horntail.png' },
]

const BossPool = () => {
  return (
    <div className="boss_pool">
      <div className="boss_word">BOSS</div>
      <Boss boss={bosses[0]} />
      <Boss boss={bosses[1]} />
      <Boss boss={bosses[2]} />
      <Boss boss={bosses[3]} />
      <Boss boss={bosses[4]} />
    </div>
  )
}

export default BossPool
