import React from 'react';
import { useLocation } from "react-router";

export default function NotFound() {
    const location = useLocation();

    return (
        <div>
            <h1>Nie znaleziono elementu: {location.pathname}</h1>
        </div>
    );
}
