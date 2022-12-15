export const incNumber=(item)=>{
    return{
        type:'INCREMENT',
        payload:item
    }
}

export const incDelete=(id)=>{
    return{
        type:'DLT_ITEM',
        payload:id
    }
}

export const Remove=(item)=>{
    return{
        type:'RMV_ONE',
        payload:item
    }
}