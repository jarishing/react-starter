import moment from 'moment';

const Model = function () {

    const setData = () => {
        if(!this.props.data.countByDateRange){
            return null;}

        let countByDateRange = this.props.data.countByDateRange;
        let result = {... this.state};
        
        let messageDate = {
            labels: countByDateRange.map( item => moment(item.key).format('Do MMMM')),
            datasets: [
                {
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
                    data: countByDateRange.map(item => item.value )
                }
            ]
        };

        result.messageDate = messageDate;
        return this.setState( result );
    }

    return { setData };
};

export default Model;