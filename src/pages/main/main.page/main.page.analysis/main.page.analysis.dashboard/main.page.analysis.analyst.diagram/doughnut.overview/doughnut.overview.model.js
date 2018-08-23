const Model = function () {

    const setData = () => {
        if(!this.props.data.countBySubSource){
            return null;}

        let result = {... this.state};
        let countBySource = this.props.data.countBySource;
        let legendLabel = [];

        this.setState( result );

        Object.keys( countBySource ).map(key=> {
            legendLabel.push(key);
        });

        result.legendLabel = legendLabel;
        result.data = countBySource;
        return this.setState( result );
    }

    const getSources = () => {
        return {
            labels: Object.keys( this.state.data ),
            datasets: [{
                data: Object.keys( this.state.data ).map(key=> this.state.data[key]),
                backgroundColor: [ '#158FD8', '#FF6384', '#FFCE56', '#42B8B8', '#CE28D7']
            }]
        }
    }

    return { setData, getSources };
};

export default Model;