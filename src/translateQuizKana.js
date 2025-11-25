import { useState } from "react"

function reverseDict(element){
    return {
        question: element.answer,
        answer: element.question,
        note: element.note
    }
}

function TranslateKanaQuiz({ dict, oneSideQuizWarning=true}){
    const [output, setOutput] = useState("")
    const [prevCorrectAnswers, setPrevCorrectAnswers] = useState([])
    const [prevNote, setPrevNote] = useState("")
    const [showPrev, setShowPrev] = useState(false)
    const [output_style, setOutputStyle] = useState({})
    const [random_index, setRandomIndex] = useState(Math.floor(Math.random()*dict.length))
    const [curr_input, setCurInput] = useState("")
    const [isReverse, setIsReverse] = useState(false)
    const [isBadAnswer, setIsBadAnswer] = useState(false)
    const shownDict = isReverse
    ? dict.map(item => reverseDict(item))
    : dict;
    let quiz_map = shownDict.map(el=>(<span>
            <p className="center">{"przetłumacz (bez kanji)"}</p>
            <p className="center questionP">{el.question.join(";")}</p>
            <form onSubmit={(arg)=>{
                arg.preventDefault()
            }}>
                <section className="center">
                    <input type="text" value={curr_input} className="textInput" onChange={(arg)=>{
                        setCurInput(arg.target.value)
                    }}/>
                </section>
                <section className="center">
                    <button className="button" onClick={()=>{
                    if(curr_input.trim() === ""){
                        setCurInput(" ")
                    }
                    if(el.answer.includes(curr_input.toLowerCase().trim())){
                        setPrevCorrectAnswers(el.answer.join(";"))
                        setPrevNote(el.note)
                        setOutput("Gratulacje użytkowniku")
                        setOutputStyle({color: "#0F0",})
                        setRandomIndex(Math.floor(Math.random()*dict.length))
                        setCurInput("")
                        setIsBadAnswer(false)
                        setShowPrev(true)
                    }else{
                        setOutput("źle")
                        setOutputStyle({color: "#F00",})
                        setIsBadAnswer(true)
                        setShowPrev(false)
                    }
                }}>
                    Zgadnij
                </button></section>
            </form>
            <section className="center">
                <p style={output_style} className="output">{output}</p>
            </section>
            {showPrev&&<>
                <section className="center">
                    <p>poprawne odpowiedzi: {prevCorrectAnswers}</p>
                </section>
                {prevNote !== null&&
                <section className="center">
                    <p>({prevNote})</p>
                </section>}
            </>}
            {isBadAnswer&&<>
                <p className="center">{el.answer.join(";")}</p>
                {el.note !== null&&<p className="center">
                    ({el.note})
                </p>}
            </>}
            <section className="center">
                <input type="checkbox" id="reverse" onChange={(arg)=>{
                    setIsReverse(arg.target.checked)
                }}/>
                <label htmlFor="reverse">zamienić?</label>
            </section>
            {oneSideQuizWarning&&<section className="center">
                <p>Uwaga! odwrócona forma nie jest zalecana, ze względu na to jak został przygotowany quiz</p>
            </section>
}
        </span>
    ))
    return(
    <>
        <section id="questionSection">
        {quiz_map[random_index]}
        </section>
    </>)
}

export default TranslateKanaQuiz