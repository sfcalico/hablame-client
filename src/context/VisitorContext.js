import { useState, createContext } from "react";

const VisitorContext = createContext();

const VisitorProvider = ({children}) => {

    const [ visitor, setVisitor ] = useState('');
    const [ entry, setEntry ] = useState('');

    const state = {
        visitorState: [ visitor, setVisitor ],
        entryState: [ entry, setEntry ]
    }

    return (
        <VisitorContext.Provider value={state} >
            {children}
        </VisitorContext.Provider>
    )

}

export { VisitorContext, VisitorProvider }