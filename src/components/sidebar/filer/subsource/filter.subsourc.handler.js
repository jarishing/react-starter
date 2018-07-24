import React, {Component} from 'react';

import FacebookSubsource  from './filter.subsource.facebook/filter.subsource.facebook';
import HkdiscussSubsource from './filter.subsource.hkdiscuss/filter.subsource.hkdiscuss';
import HkgoldenSubsource  from './filter.subsource.hkgolden/filter.subsource.hkgolden';
import LihkgSubsource     from './filter.subsource.lihkg/filter.subsource.lihkg';
import UwantsSubsource    from './filter.subsource.uwants/filter.subsource.uwants';

const DefaultModal = () => <div/>;

let MODAL = {
    default         : DefaultModal,

    FACEBOOK        : FacebookSubsource,
    HKDISCUSS       : HkdiscussSubsource,
    HKGOLDEN        : HkgoldenSubsource,
    LIHKG           : LihkgSubsource,
    UWANTS          : UwantsSubsource
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['FACEBOOK'];
    return (
        <Handler />
    )
}