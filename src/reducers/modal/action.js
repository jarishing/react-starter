export const openModal  = (modalType, show )        => ({ type: 'MODAL_OPEN',     payload: { modalType, show }});

export const closeModal = ()                        => ({ type: 'MODAL_CLOSE',    payloadl: { }});

export const setModelSubsource = ( subsourceType)   => ({ type: 'SET_MODEL_SUBSOURCE', payload: { subsourceType }});

export const closeModalSubsource = ()               => ({ type: 'CLOSE_MODEL_SUBSOURCE',    payloadl: { }});