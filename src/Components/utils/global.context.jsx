import { createContext, useEffect, useReducer, useCallback } from "react";
import { actions, initialState, reducer } from "./reducer.service";


export const ContextGlobal = createContext();


export const ContextProvider= ({children})=> {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const providerState = useCallback({
      data: state.data,
      theme: state.theme,
      setData: (item) => {
       dispatch({ type: actions.setData, payload: item });
     },
     setDarkTheme: () => {
      dispatch({ type: actions.setThemeDark });
    
     },
      setLightTheme: () => {
        dispatch({ type: actions.themeLight });
  
      },
    });

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => providerState.setData(data));
      }, [providerState]);
     
    return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
  }