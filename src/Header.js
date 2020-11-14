import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import "./Header.css"
import {Link, useHistory} from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className = "header">
            {backButton ? (
                    <IconButton onClick = {() => history.replace(backButton)}>
                        <ArrowBackIcon fontSize = "large" className = "header__icon" />
                    </IconButton>
            ) : <IconButton>    
                <PersonIcon className = "header__icon" fontSize= "large"/>
            </IconButton> }
            

            <Link to = "/">
                <img
                className = "header__logo"
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
                alt="tinder-logo"
            />
            </Link>

            
            <Link to = "/chat">
                
            <IconButton>
                    <ForumIcon className = "header__icon" fontSize= "large"/>
            </IconButton>

            </Link>
            
            
            
        </div>
    )
}

export default Header
