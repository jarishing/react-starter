import _                  from 'lodash';

const Model = function () {

    const onAllSelected = async ( e ) => {
        let result = { ... this.state };
        let source = this.props.source;

        if(e.target.checked){
            source = [... source, ...this.props.subsourceList];
            source = [... new Set(source)];
            this.props.setSource(source);
        }else{
            source = source.filter( item => !item.includes( 'discuss' ));
            this.props.setSource(source);}

        result.query.checkAll = e.target.checked;
        return this.setState( result );
    };

    const onSubsourceSelected = async( subsource ) => {
        let result = { ... this.state };
        let subsourceList = this.props.subsourceList;

        await this.props.subsourceSelected( subsource );
        let source = this.props.source.filter( item => item.includes( 'discuss' ));
        source = source.sort();
        result.query.checkAll = _.isEqual(source,subsourceList);
        return this.setState( result );
    }

    const filterSubsource = ( keyword) => {
        let result = { ... this.state };
        let subsourceList = this.props.subsourceList;

        result.query.filterList = subsourceList.filter( item => item.includes( keyword ));
        result.query.keyword = keyword;
        return this.setState( result );
    }

    const keywordClear = () => {
        let result = { ... this.state };
        result.query.keyword = "";
        result.query.filterList = this.props.subsourceList;
        return this.setState( result );
    }

    return { onAllSelected, onSubsourceSelected, filterSubsource, keywordClear };
};

export default Model;