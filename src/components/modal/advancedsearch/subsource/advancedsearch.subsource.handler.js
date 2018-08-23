import React, {Component} from 'react';

import FacebookSubsource from './advancedsearch.subsource.facebook/advancedsearch.subsource.facebook';
import LihkgSubsource from './advancedsearch.subsource.lihkg/advancedsearch.subsource.lihkg';
import HkgoldenSubsource from './advancedsearch.subsource.hkgolden/advancedsearch.subsource.hkgolden';
import UwantsSubsource from './advancedsearch.subsource.uwants/advancedsearch.subsource.uwants';
import HkdiscussSubsource from './advancedsearch.subsource.hkdiscuss/advancedsearch.subsource.hkdiscuss';

const DefaultModal = () => <div/>;

const MODAL = {
    default         : DefaultModal,

    FACEBOOK        : FacebookSubsource,
    LIHKG           : LihkgSubsource,
    HKGOLDEN        : HkgoldenSubsource,
    UWANTS          : UwantsSubsource,
    HKDISCUSS       : HkdiscussSubsource
}

export default (props) => {
    const Handler = MODAL[props.tag || 'default'];
    // const Handler = MODAL['DISCUSS'];
    return (
        <Handler />
    )
}