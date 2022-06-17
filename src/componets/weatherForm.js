import { useState } from "react";

export default function WheaterForm({onChangeCity}){
    const [city,setCity]=useState('');



    function onChange(e){ 
        const value = e.target.value;

        if(value !== ''){
            setCity(value);
        }

    }

    function handleSubmit(e){
        e.preventDefault();

        //Cuando demos enter a nuestro input
        onChangeCity(city);

    }



    return <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
    </form>



}