import React, { PureComponent } from 'react';

class Nav extends PureComponent {
    render() {
        return (
            <div className="main-top">
                <i class="fas fa-calendar-times"></i>
                <span className="top-title">Habit Tracker</span>
                <span className="top-count">{this.props.totalcount}</span>
            </div>
        );
    }
}

export default Nav;