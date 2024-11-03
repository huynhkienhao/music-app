import {
    FETCH_SONGS_REQUEST,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
} from '../actions/songType';

const initialState = {
    songs: [],
    loading: false,
    error: null,
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SONGS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                songs: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_SONGS_FAILURE:
            return {
                ...state,
                songs: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default songReducer;
