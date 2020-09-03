import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <p>{this.props.taskName}</p>
    };
}
export default ToDo;