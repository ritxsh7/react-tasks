
import { useEffect, useState } from 'react'
import './App.css'

import Bar from './components/Bar';
import Navigator from './components/Navigator';

function App() {

  const images = [
    "https://images.unsplash.com/photo-1656652662595-b88cc537db6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'https://images.unsplash.com/photo-1656662738309-b22ac2039b2e?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://images.unsplash.com/photo-1553064483-f10fe837615f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697135376141-383fed76009d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  const setNextIndex = () => {
    setActiveIndex(curr => (curr + 1) % images.length);
  }

  const setPrevIndex = () => {
     setActiveIndex(curr => curr === 0 ? images.length - 1 : curr - 1);
  }


  useEffect(() => {
    const timeout = setInterval(() => {
      setNextIndex();
    }, 3000)

    return () => {
      clearInterval(timeout);
    }
  }, [activeIndex])

  return (
    <div className='carousel-app'>
      <Navigator content={">"} position="right" setNextIndex={setNextIndex}/>
      <Navigator content={"<"} position="left" setPrevIndex={setPrevIndex}/>
      {
        images.map((img, index) => <img key={img} className={`w-[100vw] h-[100vh] object-cover ${index === activeIndex ? "block" : "hidden"}`} src={img}></img> )
      }
      <Bar images={images} activeIndex={activeIndex}/>
    </div>
  )
}

export default App
