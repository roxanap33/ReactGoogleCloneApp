import React from "react";
import {
  SearhcPageHeaderContainer,
  SearchHeaderWrapper,
  SearchPageHeaderLeft,
  SearchPageLogo,
  SearchPageHeaderRight,
  SearchPageInput,
} from "../components/SearchPageStyles";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Apps, Settings } from "@mui/icons-material";

export default function SearchPage() {
  return (
    <>
      <SearhcPageHeaderContainer>
        <SearchHeaderWrapper>
          <SearchPageHeaderLeft>
            <Link to="/">
              <SearchPageLogo>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                  alt="google-logo"
                />
              </SearchPageLogo>
            </Link>
            <SearchPageInput>
              <SearchInput />
            </SearchPageInput>
          </SearchPageHeaderLeft>
          <SearchPageHeaderRight>
            <Tooltip title="Quick Settings">
              <IconButton>
                <Settings />
              </IconButton>
            </Tooltip>
            <Tooltip title="Google apps">
              <IconButton>
                <Apps
                  sx={{
                    height: "24px",
                    width: "24px",
                    color: "rgba(255, 255, 255, .87)",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Google Account">
              <Avatar
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  color: "#ffffff",
                  backgroundColor: "#8ab4f8",
                }}
              >
                RC
              </Avatar>
            </Tooltip>
          </SearchPageHeaderRight>
        </SearchHeaderWrapper>
      </SearhcPageHeaderContainer>
    </>
  );
}
