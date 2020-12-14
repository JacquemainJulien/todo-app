import React, {useState} from "react";

function InputTodo(props) {

    const [inputText, setInputText] = useState({
        title: "",
    });

    function onChange(e){
        console.log("Er word getypt...");
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmit(e){
        //om te voorkomen dat hij de browser reload
        e.preventDefault();
        //geeft de title door aan addTodo
        props.addTodo(inputText.title);
        //on Submit gaat hij de value leeg maken, zodat je nieuwe todo kan geven
        setInputText({
            title: "",
        });
        console.log(inputText.title);
    }
    
    return (
        <form onSubmit={onSubmit} className="form-container">
            <input 
                type="text"
                className="input-text" 
                placeholder="Todo toevoegen..." 
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <input className="input-submit" type="submit"value="Toevoegen"/>
        </form>
    )
}

//altijd functie exporten zodanig dat je die in andere componenten kan gebruiken
export default InputTodo;