const d3Partition = {};

d3Partition.create = function(el, props, state) {
    const svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', 'd3-points');

    this.update(el, state);
};

d3Partition.update = function(el, state) {
    // Re-compute the scales, and render the data points
    const scales = this._scales(el, state.domain);
    this._drawPoints(el, scales, state.data);
};

d3Partition.destroy = function(el) {
    // Any clean-up would go here
    // in this example there is nothing to do
};

export default d3Partition;