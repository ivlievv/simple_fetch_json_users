import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css'

class UserPicture extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    onErrorHandler = (e) => {

        this.setState({
            error: e.error
        })
    }

    render() {
        const {error} = this.state;
        const {src} = this.props
        return (
            (error || !src)
            ?
                <span {...this.props}></span>
                :
                <img className={styles.photo} {...this.props} src={src} alt="User Picture" onError={this.onErrorHandler}/>
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