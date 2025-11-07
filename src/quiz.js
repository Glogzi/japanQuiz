
import { useState } from "react"


function Quiz({ dict }){
    // const sign_array = dict.map(el => el.question)
    const [output, setOutput] = useState("")
    const [output_style, setOutputStyle] = useState({})
    const [random_index, setRandomIndex] = useState(Math.floor(Math.random()*dict.length))
    const [curr_input, setCurInput] = useState("")
    const [addition, setAddition] = useState("")
    let katakana_map = dict.map(el=>(
        <section>
            <p className="center questionP">{el.question}</p>
            <form onSubmit={(arg)=>{
                arg.preventDefault()
            }}>
                <input type="text" value={curr_input} className="textInput" onChange={(arg)=>{
                    setCurInput(arg.target.value)
                }}/><br/>
                <span className="center"><button className="button" onClick={()=>{
                    setAddition("")
                    if(el.answer === curr_input){
                        setOutput("Gratulacje użytkowniku")
                        setOutputStyle({color: "#0F0",})
                        setRandomIndex(Math.floor(Math.random()*dict.length))
                        setCurInput("")
                    }else{
                        setOutput("źle")
                        if(el.answer[0] === curr_input[0]){
                            setAddition(`(${el.answer[0]} - dobrze)`)
                        }
                        if(el.answer[1] === curr_input[1]){
                            setAddition(`(${el.answer[1]} - dobrze)`)
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
        {katakana_map[random_index]}
        </section>
    </>)
}

export default Quiz