import React from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";

const Planet = (props) => {
    return(
        <div>
        <h4>{props.name}</h4>
        <DescriptionWithLink description = {props.description} link = {props.link}/>
        <GrayImg img_url = {props.img_url}/>
    </div>
    );
}

export default Planet;