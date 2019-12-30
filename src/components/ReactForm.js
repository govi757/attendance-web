import React, { Component } from 'react';
import { BasicInput } from './basicInput';
import { BasicButton } from './buttons';

export class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            formVal: {}
        }
    }

    componentDidMount() {
        this.initializeForm();
    }

    initializeForm() {
        this.setState({
            formVal: this.props.data ? this.props.data : {}
        })
        var tempArray = this.props.data ? Object.keys(this.props.data) : [];
        tempArray.map((key, index) => {
            var temp = this.state.data;
            temp.push(key);
            this.setState({
                data: temp
            });
            return true;
        });
    }

    componentDidUpdate() {
    }

    render() {
        var data = this.state.data
        return (
            <form>
                {
                    data.map((item, index) => {
                        return (
                            <div key={item + index}>
                                <BasicInput label={item} onChange={(text) => {
                                    const tempVal = this.state.formVal;
                                    tempVal[item] = text;
                                    this.setState({
                                        formVal: tempVal
                                    })
                                    // this.state.formVal[item] = text;
                                }} />
                            </div>
                        )
                    })
                }
                <BasicButton key='button' onClick={() => {
                    console.log(this.state.formVal)
                    this.props.onClick(this.state.formVal);
                }} />

            </form>
        )
    }
}