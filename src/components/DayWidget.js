import "../css/DayWidget.css"

function DayWidget(props){
    let day = props.day;
    return(
        <div>
            <span id="high">{day.main.temp}, </span><span id="low">{day.main.temp}</span>
        </div>
    )
}

export default DayWidget;