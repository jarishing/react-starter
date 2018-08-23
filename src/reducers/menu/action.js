export const setMenu  = ( menuType )              => ({ type: 'SET_MENU',     payload: { menuType }});

export const closeMenu  = ()                      => ({ type: 'CLOSE_MENU',     payload: { }});

export const setSortingType = ( sortingType )        => ({ type: 'SET_SORTING_TYPE', payload: { sortingType }});