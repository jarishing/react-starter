import SubsourceTag       from '../../../constant/subsource';

const Model = function () {

    const onAllCheck = () => {
        let source = this.props.source;

        source = [];
        this.props.closeModalSubsource();
        this.props.setSource(source);
    };

    const onModelClose = () => {
        this.props.closeModalSubsource();
        this.props.closeModal()
    };

    const handleFromChange = async (value) => {
        this.props.setStartDate(value);
    };

    const handleToChange = async (value) => {
        this.props.setEndDate(value);
    };

    return { onAllCheck, onModelClose, handleFromChange, handleToChange };
};

export default Model;