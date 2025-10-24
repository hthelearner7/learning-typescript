import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultThemeValue?: Theme;
};

// setting up the context
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
    undefined
);

// providing the values
export function ThemeProvider({
    children,
    defaultThemeValue = "system",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultThemeValue);
    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

// actually using the values using provider
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error(
            "can't use context outside of provider. You are trying to use useTheme without ThemeProvider"
        );
    }
    return context;
};
