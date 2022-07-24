import CurrentDay from "./CurrentDay"
import DayWidget from "./DayWidget"
import "../css/Forecast.css";

function Forecast(props){



    const days = props.list.slice(0,5)
    const daysMap = days.map((day) => 
        <DayWidget className="DayWidget" day = {day} />
        )

    function daylog(){
        console.log(days);
    }
    return(
        <div className="Forecast">
            <h1>{props.city.name}, {props.city.country}</h1>
            <div className="Days">
                {daysMap}
            </div>
        </div>
    )
}
export default Forecast;