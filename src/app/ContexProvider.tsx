import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApiResponse {
    data: any;
}

interface ApiResponseContextType {
    apiResponse: ApiResponse | null;
    setApiResponse: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
}

const ApiResponseContext = createContext<ApiResponseContextType | undefined>(undefined);

export const useApiResponse = (): ApiResponseContextType => {
    const context = useContext(ApiResponseContext);
    if (!context) {
        throw new Error('useApiResponse must be used within an ApiResponseProvider');
    }
    return context;
};

interface ApiResponseProviderProps {
    children: ReactNode;
}

export const ApiResponseProvider: React.FC<ApiResponseProviderProps> = ({ children }) => {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

    return (
        <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>
            {children}
        </ApiResponseContext.Provider>
    );
};
