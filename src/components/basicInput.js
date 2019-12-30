import React, { Component } from 'react';

export class BasicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLabel: false,
            errorMsg: 'is required'
        };
    }
    validateText = (text) => {
        this.props.onChange(text);
    }
    render() {
        return (
            <div className="form-group">
                <label className="bmd-label-floating">{this.props.label ? this.props.label : 'label'}</label>
                {
                    this.props.type !== 'email' && this.props.type !== 'password' ?
                        <input required className="form-control" onChange={(text) => this.validateText(text.target.value)} /> : null}
                {this.props.type === 'email' ? <input type="email" className="form-control" onChange={(text) => this.props.onChange(text.target.value)} /> : null}
                {this.props.type === 'password' ? <input type="password" className="form-control" onChange={(text) => this.validateText(text.target.value)} /> : null}
                {/* {this.props.valid === false ? <span className="errorText errorAnimation" >Hello</span> : null} */}
                {/* <span className="errorText">Hello</span> */}
            </div>
        );
    }
}