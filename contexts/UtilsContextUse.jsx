'use client';
import { createContext, useState } from "react";

export const GroupListContext = createContext()

export const GroupListContextProvider = ({children}) => {
    const [groupList, setGroupList] = useState([
        {
            label: 'a', value: 'a',
            sub: [
                {
                    label: 'sa1', value: 'sa1',
                    subsub: [
                        { label: 'sa1 subA1', value: 'sa1 subA1', description: 'rgerthbetrh' },
                        { label: 'sa1 subA2', value: 'sa1 subA2', description: 'rgerthbetrh' }
                    ]
                },
                {
                    label: 'sa2', value: 'sa2',
                    subsub: [
                        { label: 'sa2 subA1', value: 'sa2 subA1', description: 'rgerthbetrh' },
                        { label: 'sa2 subA2', value: 'sa2 subA2', description: 'rgerthbetrh' }
                    ]
                },
            ]
        },
        {
            label: 'b', value: 'b',
            sub: [
                {
                    label: 'sb1', value: 'sb1',
                    subsub: [
                        { label: 'subB1', value: 'subB1', description: 'rgerthbetrh' },
                        { label: 'subB2', value: 'subB2', description: 'aaaaaaaaa' }
                    ]
                },
                {
                    label: 'sb2', value: 'sb2',
                    subsub: [
                        { label: 'sb2 subB1', value: 'sb2 subB1', description: 'efgwrg' },
                        { label: 'sb2 subB2', value: 'sb2 subB2', description: 'egergertgetbnh' }
                    ]
                },
            ]
        },

    ]);

    return (
        <GroupListContext.Provider value={[groupList, setGroupList]}>
            {children}
        </GroupListContext.Provider>
    );
};

