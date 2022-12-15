const initialState={
    carts:[]
}

const changeTheNumber=(state=initialState,action)=>{
      switch(action.type){
        case "INCREMENT": 
        const itemindex=state.carts.findIndex((item)=>item.id===action.payload.id);
        if(itemindex>=0){
          state.carts[itemindex].qnty+=1;
        }
        else{
          const temp={...action.payload,qnty:1}
        
        return{
            ...state,
            carts:[...state.carts,temp]
        }
      }
      case "DLT_ITEM":
        const data=state.carts.filter((ele)=>ele.id!==action.payload);
      return{
        ...state,
        carts:data

      }

      case "RMV_ONE":
        const itemindex_dec=state.carts.findIndex((item)=>item.id===action.payload.id);
          if(state.carts[itemindex_dec].qnty>=1){
            const dltitem=state.carts[itemindex_dec].qnty-=1

            return{
              ...state,
              carts:[...state.carts]
            }
          }
          else if(state.carts[itemindex_dec].qnty===1){
            const data=state.carts.filter((ele)=>ele.id!==action.payload);
            return{
              ...state,
              carts:data
            }
          }
        default :return state;
      }

    }

    export default changeTheNumber