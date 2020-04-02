import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css'

class UserPicture extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    onErrorHandler = (e) => {

        this.setState({
            isError: true
        })
    }

    render() {
        const {isError} = this.state;
        const {src, style, firstName, lastName, className} = this.props
        return (
            (isError || !src)
            ?
                <span style={style} className={className}>{`${firstName.charAt(0)}${lastName.charAt(0)}`}</span>
                :
                <img style={style} className={styles.photo} {...this.props} src={src} alt="User Picture" onError={this.onErrorHandler}/>
        )
    }
}

UserPicture.defaultProps = {
    src: '',
}
UserPicture.propType = {
    src: PropTypes.string.isRequired,
    photo:PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}


export default UserPicture;