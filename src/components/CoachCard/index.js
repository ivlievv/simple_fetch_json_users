import React from "react";
import PropTypes from 'prop-types'
import UserPicture from "../UserPicture";
import ColorHash from 'color-hash';

const colorHash = new ColorHash()



function CoachCard (props) {
    const {coach: {firstName, lastName, photo, level}} = props;
    const fullName =  `${firstName}   ${lastName}`;
    const imgStyle = {
        backgroundColor: colorHash.hex(fullName)
    }


    return(
        <div>
            <UserPicture style={imgStyle}
                         lastName={lastName}
                         firstName={lastName}
                         src={photo}
            />
            <div>
                <div>{fullName}</div>
                <div>{level}</div>
            </div>
            <div>

            </div>
        </div>

    );


}

CoachCard.defoultProps = {
    src: ''
}
CoachCard.propTypes = {
    coach: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        photo:PropTypes.string,
        level: PropTypes.number.isRequired

    })
}


export default CoachCard;