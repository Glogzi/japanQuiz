
import { useState } from "react"


function Quiz({ dict }){
    // const sign_array = dict.map(el => el.question)
    const [output, setOutput] = useState("")
    const [output_style, setOutputStyle] = useState({})
    const [random_index, setRandomIndex] = useState(Math.floor(Math.random()*dict.length))
    const [curr_input, setCurInput] = useState("")
    const [addition, setAddition] = useState("")
    let quiz_map = dict.map(el=>(<section>
            <p className="center questionP">{el.question}</p>
            <form onSubmit={(arg)=>{
                arg.preventDefault()
            }}>
                <input type="text" value={curr_input} className="textInput" onChange={(arg)=>{
                    setCurInput(arg.target.value)
                }}/><br/>
                <span className="center"><button className="button" onClick={()=>{
                    setAddition("")
                    if(el.answer === curr_input.toLowerCase()){
                        setOutput("Gratulacje użytkowniku")
                        setOutputStyle({color: "#0F0",})
                        setRandomIndex(Math.floor(Math.random()*dict.length))
                        setCurInput("")
                    }else{
                        setOutput("źle")
                        let correctLetters = [];
                        for (let i = 0; i < el.answer.length; i++) {
                            if (el.answer[i] === curr_input[i].toLowerCase()) {
                                correctLetters.push(`(${el.answer[i]} - dobrze)`);
                            }
                        }
                        if (correctLetters.length > 0) {
                             setAddition(correctLetters.join(""));
                        }
                        setOutputStyle({color: "#F00",})
                    }
                }}>
                    Zgadnij
                </button></span>
            </form>
            <span className="center">
                <p style={output_style} className="output">{output}</p>
                <p style={{color: "#0F0",}} className="output">{addition}</p>
            </span>
        </section>
    ))
    return(
    <>
        <section id="questionSection">
        {quiz_map[random_index]}
        </section>
    </>)
}

export default Quiz