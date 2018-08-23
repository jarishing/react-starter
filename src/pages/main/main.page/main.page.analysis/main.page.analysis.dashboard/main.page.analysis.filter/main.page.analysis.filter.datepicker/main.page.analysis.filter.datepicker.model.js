const Model = function () {

    const handleFromChange = async (value) => {
        await this.props.setStartDate(value);
        await this.props.getDashboardDate();
    };

    const handleToChange = async (value) => {
        await this.props.setEndDate(value);
        await this.props.getDashboardDate();
    };


    return { handleFromChange, handleToChange };
};

export default Model;