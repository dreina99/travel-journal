import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data/data'

import './App.css'

export default function App() {
  let cardElements = data.map(item => {
    return <Card key={item.id} {...item} />
  })

  return (
    <div className='page-container'>
      <div className='content-container'>
        <Navbar />
        <div className='cards'>
          {cardElements}
        </div>
      </div>
    </div>
  )
}