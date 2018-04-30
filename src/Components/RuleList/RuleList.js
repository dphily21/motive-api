import React, {Component} from 'react';
import Rule from "../Rule/Rule";

class RuleList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.rules.map(rule => {
                        return <Rule/>
                    })
                }
            </div>
        )
    }
}

export default RuleList;