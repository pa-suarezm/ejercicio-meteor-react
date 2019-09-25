import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Forecast } from "../api/forecast.js";
import WeekForecast from "./WeekForecast.js";

class MonthForecast extends Component {

    renderWeeks() {
        return this.props.forecast.map((w) => <div className="row" key={w.week}><div className="col-12"><WeekForecast key={w._id} week={w.week} days={w.days} /></div></div>);
    }

    render() {
        return(
            <div>
                <div className="row text-center bg-info">
                    <div className="col-sm">
                        Forecast for February
                    </div>
                </div>
                {this.renderWeeks()}
            </div>
        )
    }

}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(MonthForecast);