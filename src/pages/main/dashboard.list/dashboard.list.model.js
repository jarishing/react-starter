
const Model = function () {

    const handleKeywordChange = async (value) => {
        await this.props.setKeyword(value);
        await this.props.searching();
    }

    const handleFromChange = async (value) => {
        await this.props.setStartDate(value);
        await this.props.searching();
    };

    const handleToChange = async (value) => {
        await this.props.setEndDate(value);
        await this.props.searching();
    };

    return { handleKeywordChange,handleFromChange, handleToChange };
};

export default Model;