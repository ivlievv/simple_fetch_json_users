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
            isSelected:false,
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

    selectCoachByIndex = (index) =>{
            this.state.coaches[index].isSelected = !this.state.coaches[index].isSelected
        this.forceUpdate()
    }

    render() {
        const {coaches} = this.state;
        return (
            <ul className={styles.container}>
                {
                    <li className={styles.listItem}>To:
                        {
                            coaches.filter(item => item.isSelected).map(selectedCoach => `${selectedCoach.firstName} ${selectedCoach.lastName}` ).join(', ')
                        }
                    </li>
                }
                {
                this.renderSpinner()
                }
                {
                    coaches.map((coach, index)  => (
                        <li key={coach.id}>
                            <CoachCard onSelect={() => {this.selectCoachByIndex(index)}} coach={coach}/>
                        </li>
                    ))
                }

            </ul>
        )
    }


}

export default CoachesList;