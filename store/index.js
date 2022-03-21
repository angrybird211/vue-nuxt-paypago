
export function state() {
    return {
        user: [],
        isLoggedIn:false
    }
};


//Mutations
export const mutations = {

setLogin(state, status) {
    state.isLoggedIn = status;
},

setProfile(state, profile) {
    state.user = profile;
},

  }

  //Actions
  export const actions = {
    getLogin({commit},status)
    {
      commit('setLogin',status)
    },

    getProfile({commit},profile)
    {
      commit('setProfile',profile)
    }

  }

  //Getters
  export const getters = {
    logged: state => {
        return state.isLoggedIn;
    },
    
};
   