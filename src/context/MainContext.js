import React, { useState } from "react";
const MainContext = React.createContext();

function MainProvider (props) {

    const [openModal , setOpenModal]=useState(false);
    const [updating , setUpdating]=useState(false);
    const [ idToEdit , setIdToEdit]=useState(null);

    return(
        <MainContext.Provider value = {{
            openModal,setOpenModal,
            updating , setUpdating,
            idToEdit , setIdToEdit
        }} >
            {props.children}
        </MainContext.Provider>
    )
    
}

export{MainContext, MainProvider}