import React, {Component} from 'react';
import d3Partition from 'd3Partition';
import * as d3 from 'd3';

class Partition extends Component{

    static propTypes = {...}

    componentDidMount() {
        // D3 Code to create the chart
        this._chart = D3Line.create(
            this._rootNode,
            this.props.data,
            this.props.config
        );
    }

    componentDidUpdate() {
        // D3 Code to update the chart
        D3Line.update(
            this._rootNode,
            this.props.data,
            this.props.config,
            this._chart
        );
    }

    componentWillUnmount() {
        D3Line.destroy(this._rootNode);
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        <div className="line-container" ref={this._setRef.bind(this)} />
    }
}

export default Partition;