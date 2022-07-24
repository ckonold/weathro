function CurrentDay(props){
    let j;



    return(
        <div>
        <h1>{props.city},{props.country}</h1>
        <p>
            temp: {props.day.main.temp}
        </p>
        </div>
    )
}

export default CurrentDay;