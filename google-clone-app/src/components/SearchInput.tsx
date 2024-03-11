import React from "react";
import {
  MicrofonIcon,
  SearchContainer,
  SearchIcon,
  SearchInputContainer,
  SearchTextArea,
} from "./SearchInputStyles";
import { Tooltip } from "@mui/material";

export default function SearchInput() {
  return (
    <form>
      <SearchContainer>
        <SearchInputContainer>
          <SearchIcon />
          <SearchTextArea />
          <Tooltip title="Search by voice">
            <MicrofonIcon />
          </Tooltip>
        </SearchInputContainer>
      </SearchContainer>
    </form>
  );
}
