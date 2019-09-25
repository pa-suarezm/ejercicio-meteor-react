import React, { Component } from "react";

export default class DayForecast extends Component {

    getImage = () => {
        let image = null;
        switch(this.props.report.status){
            case "Mostly sunny":
                image = <img src="imgs/mostly.png" alt="mostly sunny" height="42"/>;
                break;
            case "Mostly Sunny":
                image = <img src="imgs/mostly.png" alt="mostly sunny" height="42"/>;
                break;
            case "Showers":
                image = <img src="imgs/rainy.png" alt="showers" height="42"/>;
                break;
            case "Sunny":
                image = <img src="imgs/sunny.png" alt="sunny" height="42"/>;
                break;
            case "Hail":
                image = <img src="imgs/hail.png" alt="hail" height="42"/>
                break;
            case "Cloudy":
                image = <img src="imgs/cloudy.png" alt="cloudy" height="42"/>;
                break;
            case "Mostly cloudy":
                image = <img src="imgs/mostly.png" alt="mostly cloudy" height="42"/>;
                break;
            case "Rainy":
                image = <img src="imgs/rainy.png" alt="rainy" height="42"/>;
                break;
            default:
                return image;
        }
        return image;
    }

    render() {
        return(
            <div className="col-sm">
                <p>{this.props.report.dayName}</p>
                <p>{this.props.report.minTemp}</p>
                <p>{this.props.report.maxTemp}</p>
                <p>{this.getImage()} {this.props.report.status}</p>
            </div>
        );
    }
}