import React from "react";
import PropTypes from 'prop-types'
import UserPicture from "../UserPicture";
import ColorHash from 'color-hash';
import styles from './style.module.css'
import { mdiCheck } from '@mdi/js';
import Icon from "@mdi/react";
import classNames from 'classnames'

const colorHash = new ColorHash()




function CoachCard (props) {
    const {coach: {firstName, lastName, photo, level, isSelected}} = props;
    const fullName =  `${firstName}   ${lastName}`;
    const imgStyle = {
        backgroundColor: colorHash.hex(fullName)
    }


    return(
        <div className={styles.container}>
            <UserPicture style={imgStyle}
                         className={styles.photo}
                         lastName={lastName}
                         firstName={lastName}
                         src={photo}
            />
            <div>
                <div className={styles.name}>{fullName}</div>
                <div className={styles.level}>{level}</div>
            </div>
            <div onClick={props.onSelect} className={classNames(styles.checkBox, {[styles.checked] : isSelected})}>
                <Icon path={mdiCheck} color={"white"} size={'75%'}/>
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