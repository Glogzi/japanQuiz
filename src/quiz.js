
import { useState } from "react"

function reverseDict(element){
    return {
        question: element.answer,
        answer: element.question
    }
}

function Quiz({ dict, info=""}){
    const [output, setOutput] = useState("")
    const [output_style, setOutputStyle] = useState({})
    const [random_index, setRandomIndex] = useState(Math.floor(Math.random()*dict.length))
    const [curr_input, setCurInput] = useState("")
    const [isReverse, setIsReverse] = useState(false)
    const shownDict = isReverse
    ? dict.map(item => reverseDict(item))
    : dict;
    let quiz_map = shownDict.map(el=>(<span>
            <p className="center">{info}</p>
            <p className="center questionP">{el.question}</p>
            <form onSubmit={(arg)=>{
                arg.preventDefault()
            }}>
                <input type="text" value={curr_input} className="textInput" onChange={(arg)=>{
                    setCurInput(arg.target.value)
                }}/><br/>
                <span className="center"><button className="button" onClick={()=>{
                    if(curr_input.trim() === ""){
                        return
                    }
                    console.log(curr_input)
                    console.log(el.answer)
                    if(el.answer === curr_input.toLowerCase().trim()){
                        setOutput("Gratulacje użytkowniku")
                        setOutputStyle({color: "#0F0",})
                        setRandomIndex(Math.floor(Math.random()*dict.length))
                        setCurInput("")
                    }else{
                        let correctLetters = ["dobre: "];
                        for (let i = 0; i < el.answer.length && i < curr_input.length; i++) {
                            if (el.answer[i] === curr_input[i].toLowerCase()) {
                                correctLetters.push(` ${el.answer[i]}[${i+1}]`);
                            }
                        }
                        if (correctLetters.length > 1) {
                            setOutput(correctLetters.join(""));
                            setOutputStyle({color: "#CC0"})
                        }else{
                            setOutput("źle")
                            setOutputStyle({color: "#F00",})
                        }
                    }
                }}>
                    Zgadnij
                </button></span>
            </form>
            <section className="center">
                <p style={output_style} className="output">{output}</p>
            </section>
            <section className="center">
                <input type="checkbox" id="reverse" onChange={(arg)=>{
                    setIsReverse(arg.target.checked)
                }}/>
                <label htmlFor="reverse">odwrócić?</label>
            </section>
        </span>
    ))
    return(
    <>
        <section id="questionSection">
        {quiz_map[random_index]}
        </section>
    </>)
}

export default Quiz