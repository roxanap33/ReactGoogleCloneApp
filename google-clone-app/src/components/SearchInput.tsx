import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch(event: any) {
    event.preventDefault();
    navigate(`/search?${searchTerm}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <div>
        <SearchContainer>
          <SearchInputContainer>
            <SearchIcon />
            <SearchTextArea
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Tooltip title="Search by voice">
              <MicrofonIcon />
            </Tooltip>
          </SearchInputContainer>
        </SearchContainer>
        <SearchButtonsContainer>
          <SearchButtons type="submit">Google Search</SearchButtons>
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
