import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;

// used for wraping GameCard and GameCardSekelton components in GameGrid to remove duplication in parameters used with in those two components
