import { createContext, useState } from "react";

export const ButtonContext = createContext({});

interface Props {
children: React.ReactNode
}

const ButtonProvider: React.FC<Props> = ({ children }) => {
const [openDrawer, setOpenDrawer] = useState(false);

function toogleDrawer(): void {
  setOpenDrawer(!openDrawer)
}

const value = {
  openDrawer,
  toogleDrawer,
}

return (
  <ButtonContext.Provider value={value}>
    {children}
  </ButtonContext.Provider>
)
}

export default ButtonProvider;