import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    componentDidMount(){
       console.log(`mouunt : ${this.props.habit.name}`);
    }

    componentWillUnmount(){
        console.log(`unmount : ${this.props.habit.name}`);
    }

    handleIncrement = ()=>{         
        this.props.onIncrement(this.props.habit)
    }
 
     handleDecrement = ()=>{
        this.props.onDecrement(this.props.habit)
     }
 
     handleDelete = ()=>{
        this.props.onDelete(this.props.habit)
   }
    
    render() {
        console.log('habit')
        const {name, count} = this.props.habit;
        
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button 
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i class="fas fa-plus-square"></i>
                </button> 
                <button 
                    className="habit-button habit-decrease" 
                    onClick={this.handleDecrement}
                >
                    <i class="fas fa-minus-square"></i>
                </button> 
                <button 
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i class="fas fa-trash"></i>
                </button> 
            </li>
        );
    }
}

export default Habit;