const {createStore}  = require('redux')
const initialState = {
    age: 21  
};

const myReducer = ( state = initialState , action ) =>{
    const newState = {...state};
    console.log(action)
    if(action.type == 'ADD'){  
        newState.age+=1;
        console.log("jrj2")
    }
    if(action.type == 'SUB'){
         newState.age--;
         console.log("jrj3")
        }
    return newState;
}

//created a store 
const store = createStore(myReducer);

//need to create a action basically action are like comand 

store.subscribe((changed)=>{
    console.log('state\'s changed');
    console.log(store.getState())
})

store.dispatch({
    type:'ADD'
})


store.dispatch({
    type:'SUB'
})
store.dispatch({
    type:'ADD'
})


store.dispatch({
    type:'SUB'
})
store.dispatch({
    type:'ADD'
})


store.dispatch({
    type:'SUB'
})
