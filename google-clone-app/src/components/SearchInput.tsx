import React from "react";
import {
  MicrofonIcon,
  SearchButtons,
  SearchButtonsContainer,
  SearchContainer,
  SearchIcon,
  SearchInputContainer,
  SearchTextArea,
  TextSection,
  TextSectionContainer,
} from "./SearchInputStyles";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchInput() {
  return (
    <form>
      <div>
        <SearchContainer>
          <SearchInputContainer>
            <SearchIcon />
            <SearchTextArea />
            <Tooltip title="Search by voice">
              <MicrofonIcon />
            </Tooltip>
          </SearchInputContainer>
        </SearchContainer>
        <SearchButtonsContainer>
          <SearchButtons>Google Search</SearchButtons>
          <SearchButtons>I'm Feeling Lucky</SearchButtons>
        </SearchButtonsContainer>
        <TextSectionContainer>
          <TextSection>
            Google offered in:
            <Link
              to={
                "https://www.google.com/setprefs?sig=0_YlrVN7LG__lRY61oc09jSwukrfY%3D&hl=ro&source=homepage&sa=X&ved=0ahUKEwiC-sCtiu2EAxX5gP0HHTYNC04Q2ZgBCB8"
              }
            >
              Română
            </Link>
            <Link
              to={
                "https://www.google.com/setprefs?sig=0_YlrVN7LG__lRY61oc09jSwukrfY%3D&hl=hu&source=homepage&sa=X&ved=0ahUKEwiC-sCtiu2EAxX5gP0HHTYNC04Q2ZgBCCA"
              }
            >
              magyar
            </Link>
            <Link
              to={
                "https://www.google.com/setprefs?sig=0_YlrVN7LG__lRY61oc09jSwukrfY%3D&hl=de&source=homepage&sa=X&ved=0ahUKEwiC-sCtiu2EAxX5gP0HHTYNC04Q2ZgBCCE"
              }
            >
              Deutsch
            </Link>
          </TextSection>
        </TextSectionContainer>
      </div>
    </form>
  );
}
