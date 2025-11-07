import './App.css';
import { useState } from 'react';
import Quiz from './quiz.js';
import katakana_dict from "./katakana.json"
import hiragana_dict from "./hiragana.json"
import katakana_words_dict from "./katakana_words.json"

function App() {
  const [courseName, setCourseName] = useState("main")
  const buttons = ["katakana", "hiragana", "katakana-words"]
  let buttons_map = buttons.map(el=>(
    <>
      <button className="menuButton" onClick={()=>{
        setCourseName(el)
      }}>{el}</button>
    </>
  ))
  return (
    <>
    <header className='header'>
      <h1 onClick={()=>{
        setCourseName("main")
      }} className='onHoverPoint'>Japoński</h1>
    </header>
    <main>
      {courseName === "main"&&<>
        <section className='center'>
          {buttons_map}
        </section>
      </>}
      {courseName === "katakana"&&<>
        <Quiz dict={katakana_dict}/>
      </>}
      {courseName === "hiragana"&&<>
        <Quiz dict={hiragana_dict}/>
      </>}
      {courseName === "katakana-words"&&<>
        <Quiz dict={katakana_words_dict}/>
      </>}
      
    </main>
    </>
  );
}

export default App;
