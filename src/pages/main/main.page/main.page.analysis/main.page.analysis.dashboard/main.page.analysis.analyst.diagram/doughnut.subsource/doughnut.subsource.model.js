const Model = function () {

    const setData = () => {
        if(!this.props.data.countBySubSource){
            return null;}

        let result = {... this.state};
        let countBySubSource = this.props.data.countBySubSource;
        let total = this.props.data.totalCount;
        
        let source = [];
        let legendLabel = [];
        let labels = [];
        let data = [];
        let legendData = [];

        let other = 0;

        if(countBySubSource.length > 5){
            source  = countBySubSource.slice(0,5);

            source.map( item => (
                legendLabel.push(item.key),
                labels.push(item.key.split('_')[1]),
                data.push(item.doc_count),
                legendData.push(  Math.round(((item.doc_count/total)* 100)*10)/10 + "%" ),
                other = other + item.doc_count
            ));

            legendLabel.push("none_Other");
            labels.push("Other");
            data.push(total-other);
            legendData.push( Math.round((((total-other)/total)* 100)* 10)/10 + "%" );
        }else{
            source  = countBySubSource;

            source.map( item => (
                legendLabel.push(item.key),
                labels.push(item.key.split('_')[1]),
                data.push(item.doc_count),
                legendData.push(  Math.round(((item.doc_count/total)* 100)*10)/10 + "%" )
            ));
        }

        result.legendLabel = legendLabel;
        result.labels = labels;
        result.data = data;
        result.legendData = legendData;

        return this.setState( result );
    }

    const getSources = () => {
        return {
            labels: this.state.labels,
            datasets: [{
                data: this.state.data,
                backgroundColor: [ '#158FD8', '#FF6384', '#FFCE56', '#42B8B8', '#CE28D7', '#E5E5E5' ]
            }]
        }
    }

    return { setData, getSources };
};

export default Model;