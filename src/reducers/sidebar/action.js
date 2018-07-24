export const openSideBar            = (siedbarType, show)           => ({ type: 'SIDEBAR_OPEN',     payload: { siedbarType,show }});

export const closeSideBar           = ()                            => ({ type: 'SIDEBAR_CLOSE',    payloadl: { }});

export const openSubsourceList      = (subsourceType, show)         => ({ type: 'SUBSOURCELIST_OPEN',     payload: { subsourceType,show}});