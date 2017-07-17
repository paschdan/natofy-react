import React from 'react'
import encodify from 'encodify'

class Natofier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'type some words',
    };
  }

  natofy(event) {
    const text = event.target.value;
    const natofied = encodify.toNATOCode(text);
    const morse = encodify.toMorseCode(text);
    this.setState({ natofied, morse });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.natofy.bind(this)} placeholder={this.state.placeholderText} className="form-control"/>
        {this.state.natofied && (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Natofied</h3>
            </div>
            <div className="panel-body">
              {this.state.natofied}
            </div>
          </div>)
        }
        {this.state.morse && (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Morse</h3>
            </div>
            <div className="panel-body">
              {this.state.morse}
            </div>
          </div>)
        }
      </div>
    );
  }

}

export default Natofier