
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

    const handleRequiredKeywordChange = async (value) => {
        await this.props.setRequiredKeyword(value);
        await this.props.searching();
    };

    const handleExcludedKeywordChange = async (value) => {
        await this.props.setExcludedKeyword(value);
        await this.props.searching();
    };

    const handleExtendFilter = () => {
        let result = { ... this.state};
        result.filterExtend = !result.filterExtend;
        return this.setState( result );
    }

    return { handleKeywordChange, handleFromChange, handleToChange, handleRequiredKeywordChange, handleExcludedKeywordChange, handleExtendFilter };
};

export default Model;