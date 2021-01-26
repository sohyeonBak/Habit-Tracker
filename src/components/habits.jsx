import React, { Component } from 'react';
import Habit from "./habit";
import Habitaddform from './habitaddform';

class Habits extends Component {
    handleIncrement = (habit)=>{         
        this.props.onIncrement(habit)
    }

    handleDecrement = (habit)=>{
        this.props.onDecrement(habit)
    }

    handleDelete = (habit)=>{
        this.props.onDelete(habit)
    }

    handleAdd = (name) => {
        this.props.onAdd(name)
    }

    render() {
        return (
            <>
                <Habitaddform onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit =>(
                        <Habit 
                            key= {habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete} 
                        />
                    ))}
                </ul>
                <button className="reset" onClick={this.props.onReset}>Reset All</button>
            </>
            
        );
    }
}

export default Habits;