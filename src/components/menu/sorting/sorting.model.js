const Model = function () {

    const onItemSelection = ( item ) => {
        this.props.setSortingType(item);
        this.props.closeMenu();
    };

    return { onItemSelection };
};

export default Model;