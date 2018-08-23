import SubsourceTag       from '../../../constant/subsource';

const Model = function () {

    const onAllCheck = () => {
        let source = this.props.source;

        source = [];
        this.props.setSubsourceList(SubsourceTag.DEFAULT, false);
        this.props.setSource(source);
    }

    return { onAllCheck };
};

export default Model;