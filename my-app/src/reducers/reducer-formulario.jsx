export const reducerFormulario =(state={}, action)=>{
    let st ={...state}//restparams
    if(action.type){
        switch(action.type){
            case 'SEND_DATA_FORM':
                console.log("REDUCER FORMULARIO");
                break;
        }
    }

    return st;
}