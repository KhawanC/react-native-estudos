import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack"

export const Route = (params) => {
    return(
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    )
};
