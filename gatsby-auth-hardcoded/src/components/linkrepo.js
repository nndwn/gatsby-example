import React from "react";
import Icons from "./icons";

const LinkRepo = ({size, text, link}) => (
    <div>
    <a href={link}>
        <Icons
            icon={"github"}
            size={size || 40 }
        />
        <span>{ text ||`Fork or clone from Github`}</span>
    </a>
</div>
)

export default LinkRepo