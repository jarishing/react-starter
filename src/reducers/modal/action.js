export const openModal  = (modalType, show)         => ({ type: 'MODAL_OPEN',     payload: { modalType, show }});

export const closeModal = ()                        => ({ type: 'MODAL_CLOSE',    payloadl: { }});