import { createContext } from "react";
interface DarkModeType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const DarkModeContext = createContext<DarkModeType>({} as DarkModeType);
export default DarkModeContext;
