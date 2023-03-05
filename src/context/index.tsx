
import { createContext,ReactChild,useContext } from "react";

const GKContext = createContext({});

export const GKContextProvider = ({children}:{children:ReactChild})=>{
  const sharedState ={
    bModalOpen: false,
  };
  return(
    <GKContext.Provider value={sharedState}>
      {children}
    </GKContext.Provider>
  );
}

export const useGKContext = () =>{
  return useContext(GKContext);
}