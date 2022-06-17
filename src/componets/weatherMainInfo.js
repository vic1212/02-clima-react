export default function WheatherMainInfo({weather}){

    return <div>
        <div>{weather?.location.name}</div>
    </div>
}