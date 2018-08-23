import pageTag      from '../../../constant/page';

const Model = function () {

    const goToAnalysisPage = async () => {
        this.props.setPage(pageTag.ANALYSIS);
        this.props.getDashboardDate();
    }

    return { goToAnalysisPage };
};

export default Model;
