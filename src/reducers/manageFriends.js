export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [
                      ...state.friends,
                      action.friend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            const rFriend = state.friends.find(f => f.id === action.id)
            const rIndex = state.friends.indexOf(rFriend)
            return (
                {...state,
                friends: [
                    ...state.friends.slice(0, rIndex),
                    ...state.friends.slice(rIndex + 1)
                ]
                }
            )
        default:
            return state;
    }
}
