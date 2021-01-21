import React from "react";

export default function GameBanner({banner, game, alt}) {
    return(
        <img src={banner} alt={alt + game + "!"} />
    )
}