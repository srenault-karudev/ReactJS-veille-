import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Please Click me!",
            clickCount: 0
        };
    }

    updateCount() {
        this.setState((prevState) => {
            return {
                clickCount: prevState.clickCount + 1,
                text: "Clicked"

            };
        });
    }

    render() {
        return (
            <button onClick={() => this.updateCount()}>
                {this.state.text} : {this.state.clickCount}
            </button>
        );
    }
}

export default Button;