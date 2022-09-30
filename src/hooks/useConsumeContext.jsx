import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

export const useConsumeContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacter must be used within a CharacterContextProvider"
    );
  }
  return context;
};
