import React from 'react';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = (e) => {
    e.preventDefault();  // How to stop click event from bubbling up / prevent selecting text?
    let nextState = {
      count: this.state.count + 1
    }
    this.setState( nextState );
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt="A horned beast" title={this.props.title} width="200" onClick={() => this.props.handlerToOpenModal(this.props.title)} />
        <p>{this.props.description}</p>
        <p onClick={this.increment}>❤️ {this.state.count}</p>
      </div>
    );
  }

}

export default HornedBeast;
