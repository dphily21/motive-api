import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import RuleList from "../RuleList/RuleList";


class RuleBuilder extends Component{
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    render(){
        const { selectedOption } = this.state;
        return (
            <div>
                <h2>Rules</h2>
                <Select
                    name="form-field-name"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                    ]}
                />
                <RuleList/>
            </div>
        )
    }
}

export default RuleBuilder;