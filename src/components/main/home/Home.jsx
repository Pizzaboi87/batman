import enemiesData from './card/enemiesData'
import alliesData from './card/alliesData'
import batmanData from './card/batmanData'
import Card from './card/Card'
import './home.css'

const Home = () => {

  const allies = alliesData.map(ally => {
    return(
      <Card
        key={ally.id}
        id={ally.id}
        name={ally.name}
        image={ally.image}
        desc={ally.desc}
      />
    )
  })

  const enemies = enemiesData.map(enemy => {
    return (
      <Card
        key={enemy.id}
        id={enemy.id}
        name={enemy.name}
        image={enemy.image}
        desc={enemy.desc}
      />
    )
  })

  return (
    <>
      <h1 className='title'>Main Characters</h1>
      <div className='characters '>
        <Card 
          id={batmanData.id}
          name={batmanData.name}
          image={batmanData.image}
          desc={batmanData.desc}
        />
        <h2 className='cardtitle'>Allies</h2>
        <div className='allies'>
          {allies}
        </div>
        <h2 className='cardtitle'>Enemies</h2>
        <div className='enemies'>
          {enemies}
        </div>
      </div>
    </>
  )
}

export default Home;