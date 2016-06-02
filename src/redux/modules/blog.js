const LOAD = 'katakana/blog/LOAD';
const LOAD_SUCCESS = 'katakana/blog/LOAD_SUCCESS';
const LOAD_FAIL = 'katakana/blog/LOAD_FAIL';
const FETCH = 'katakana/blog/FETCH';
const FETCH_SUCCESS = 'katakana/blog/FETCH_SUCCESS';
const FETCH_FAIL = 'katakana/blog/FETCH_FAIL';

const initialState = {
  loaded: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case FETCH:
      return {
        ...state,
        loading: true,
        post: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.result[0]
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.blog && globalState.blog.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/posts?_embed=author')
  };
}

export function getPost(slug) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/posts?slug=' + slug + '&_embed=author')
  };
}
