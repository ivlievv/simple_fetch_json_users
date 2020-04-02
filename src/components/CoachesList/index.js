import React,{Component} from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import styles from './styles.module.css';
import CoachCard from "../CoachCard";

class CoachesList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            coaches:[],
            error: null
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true
        });

        setTimeout(() => {
            fetch('coaches.json')
                .then(response => response.json())
                .then(coaches =>{
                    this.setState({
                        coaches,
                        isFetching: false,
                    });
                })
                .catch(error =>{
                    this.setState({
                        error,
                        isFetching: false,
                    });
                })

        },1000)


    }

    renderSpinner = () => {
        const {isFetching} = this.state;
        if (isFetching){
            return <Spinner/>
        }
    }

/*    renderCoaches = () => {
        const {coaches} = this.state;

        return coaches.map(coach => (
            <li key={coach.id}>
                <div className={styles.coachContainer}>
                        <img className={styles.photo} src={coach.photo} alt=""/>
                        <h4>{coach.firstName + ' ' + coach.lastName}</h4>
                        <h4>{coach.level}</h4>
                    <img src="" alt=""/>
                </div>
            </li>
        ))
    }*/








    render() {
        const {coaches} = this.state;
        return (
            <ul className={styles.container}>
                {
                this.renderSpinner()
                }
                {
                    coaches.map(coach  => (
                        <li key={coach.id}>
                            <CoachCard coach={coach}/>

                        </li>


                    ))


                }
            </ul>
        )
    }


}

export default CoachesList;