import { useEffect, useState } from "react";
import WheaterForm from "./weatherForm";

export default function WheaterApp(){
    const [weather,setWeather] = useState(null);

    //Este hook espara poder ejecutar codigo al inicio
    useEffect(() => {
        loadInfo();
    },[]);


    //Ocupamos este hook para poder cambiar el nombre del titulo
    useEffect(() => {

        document.title = `Weather | ${weather?.location.name ?? ''}`;

    },[weather]);

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
                const json =  await request.json();
                setWeather(json);
                console.log(json);
        }catch(error){

        }

    }


    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);

    }


    return <div>
        <WheaterForm onChangeCity={handleChangeCity} />
        <div>{weather?.current.temp_c}</div>
    </div>
}