import React, { Component } from 'react';

export class Rule extends Component{
    render(){
        return (
            <div>
                <div>
                    <h3>This is rule {this.props.rule.ruleId}</h3>
                    <p>X-Path: {this.props.rule.xpath} </p>
                    <p>Operator: {this.props.rule.operator} </p>
                    <p>Error: {this.props.rule.error} </p>
                </div>
            </div>
        )
    }
}

export default Rule;