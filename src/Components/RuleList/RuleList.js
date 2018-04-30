import React, {Component} from 'react';
import Rule from "../Rule/Rule";

class RuleList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.rules.map(rule => {
                        return <Rule rule={rule}/>
                    })
                }
            </div>
        )
    }
}

export default RuleList;