import './App.css';
import { useState } from 'react';
import Quiz from './quiz.js';
import TranslateKanaQuiz from './translateQuizKana.js';

import katakana_dict from "./katakana.json"
import JLPTN5p1Kana from "./JLPTN5p1Kana.json"
import hiragana_dict from "./hiragana.json"
import katakana_words_dict from "./katakana_words.json"
// import TranslateQuiz from './translateQuiz.js';
// import JLPTN5p1 from './JLPTN5p1.json';

function App() {
  const [courseName, setCourseName] = useState("main")
  const buttons = ["katakana", "hiragana", "katakana-words", "JLPTN5p1-kana"]
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
        <Quiz dict={katakana_dict} info='napisz jak się to czyta'/>
      </>}
      {courseName === "hiragana"&&<>
        <Quiz dict={hiragana_dict} info='napisz jak się to czyta'/>
      </>}
      {courseName === "katakana-words"&&<>
        <Quiz dict={katakana_words_dict} info='napisz słowo w alfabecie romańskim (bez spacji)'/>
      </>}
      {courseName === "JLPTN5p1-kana"&&<>
        <TranslateKanaQuiz dict={JLPTN5p1Kana}/>
      </>}

      {/* {courseName === "JLPTN5p1.json"&&<>
        <TranslateQuiz dict={JLPTN5p1} info='przetłumacz słowo'/>
      </>} */}
      
    </main>
    </>
  );
}

export default App;
