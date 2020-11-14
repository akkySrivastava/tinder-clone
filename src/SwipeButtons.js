import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashIcon from "@material-ui/icons/FlashOn"
import { IconButton } from '@material-ui/core'

function SwipeButtons() {
    return (
        <div className = "swipeButtons">
            <IconButton className = "swipeButtons__repeat">
                <ReplayIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__left">
                <CloseIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButton__star">
                <StarIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__right">
                <FavoriteIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__lightning">
                <FlashIcon fontSize = "large" />
            </IconButton>
            
            
        </div>
    )
}

export default SwipeButtons
