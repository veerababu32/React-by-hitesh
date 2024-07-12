import './App.css'
import Card from './components/Card'

function App() {
  let someArr = ['hello', 32, true];
  // we can send props like Object, arr. wrap with {}. everything is possible but you need handle in card props.
  return (
    <>
      <h1 className='text-3xl p-3 bg-cyan-400 text-black rounded-md'>Hey this is vite + tailwind</h1>
      <Card name="Veerababu" desc="Keep smiling..." image="https://images.pexels.com/photos/10356275/pexels-photo-10356275.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Card name="Angel" desc="Pretty soul & Simply Gorgeous" image="https://images.pexels.com/photos/26756081/pexels-photo-26756081/free-photo-of-a-woman-standing-in-front-of-the-azebler-mosque-gelibolu-canakkale-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Card name="scenery" desc="Need to see the milky way stars in LADAKH." image="https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  />
      <Card Arr={someArr} />
    </>
  )
}

export default App
