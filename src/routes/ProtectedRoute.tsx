import React from 'react';
import {Navigate} from 'react-router-dom';

type Props = {
    children: React.ReactElement | null;
}

export const ProtectedRoute = ({children}: Props) => {
    const isProtected = false

    return isProtected ? children : <Navigate to={'/login'}/>
};