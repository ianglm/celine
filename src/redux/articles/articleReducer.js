const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADDARTICLE":
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                articles: newArr
            }
    }
    return state;
}

export default articleReducer;
