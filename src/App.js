import React, { Component } from 'react'

class Greeting extends React.Component {
    // Use the render function to return JSX component
    render() {
        return (
            <div className="greeting">
                <h3>Hello {this.props.fullName}</h3>
                <i>{this.props.message}</i>

            </div>
        );


    }

}

Greeting.defaultProps = {
    fullName: "Steven",
    message:"Welcome to Website!"
}

export default Greeting