import _                    from 'lodash';
import moment               from 'moment';

const Model = function () {

    const setData = () => {
        if(!this.props.data.countByDateRange){
            return null;}

        let countByDateRange = this.props.data.countByDateRange;
        let countBySubSource = this.props.data.countBySubSource;
        let result = {... this.state};

        let datas = [ [], [], [], [], [] ];
        let source = [];
        let labels = [];
        let unhandledData = [];
        let temp = [];
        let empty = [];
        let dataLabels = [];

        source = countBySubSource.slice(0,5);

        source.map( Subsource => {
            dataLabels.push(Subsource.key); 
        });

        for ( const item of countByDateRange){
            labels.push(moment(item.key).format('Do MMMM'));
            item.source.map( subsource => {
                if( _.indexOf(dataLabels, subsource.key) > -1){
                    unhandledData.push(subsource);
                    temp.push(subsource.key)}
            })

            if(temp.length < dataLabels.length){
                _.difference(dataLabels, temp).map( item =>{
                    empty.push({key: item, doc_count: 0});
                })
            }

            unhandledData = [].concat(unhandledData, empty);
            empty = [];
            temp = [];
        };
        
        unhandledData = _.groupBy(unhandledData, item => item.key);

        Object.keys(unhandledData).map( function(key){
            unhandledData[key].map(item => {
                datas[dataLabels.lastIndexOf(item.key)].push(item.doc_count);
            });
        });
        
        let messageDate = {
            labels: labels,
            datasets: [
                {
                    label: dataLabels[0],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#158FD8',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#158FD8',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#158FD8',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[0]
                },
                {
                    label: dataLabels[1],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#FF6384',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#FF6384',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#FF6384',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[1]
                },
                {
                    label: dataLabels[2],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#FFCE56',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#FFCE56',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#FFCE56',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[2]
                },
                {
                    label: dataLabels[3],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#42B8B8',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#42B8B8',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#42B8B8',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[3]
                },
                {
                    label: dataLabels[4],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#CE28D7',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#CE28D7',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#CE28D7',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[4]
                }
            ]
        };
        result.legendLabel = dataLabels;
        result.messageDate = messageDate;
        return this.setState( result );
    }

    return { setData };
};

export default Model;