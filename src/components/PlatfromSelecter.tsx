import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatfroms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatfromSelecter({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem
            onClick={() => onSelectPlatform(platfrom)}
            key={platfrom.id}
          >
            {platfrom.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatfromSelecter;
