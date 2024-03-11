import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  LinkElements,
  TooltipElements,
} from "../components/HomeStyles";
import { Link } from "react-router-dom";
import { Avatar, Tooltip, IconButton } from "@mui/material";
import { Apps } from "@mui/icons-material";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <LinkElements>
          <Link to={"/gmail"}>Gmail</Link>
          <Link to={"/images"}>Images</Link>
        </LinkElements>
        <TooltipElements>
          <Tooltip title="Google Apps">
            <IconButton>
              <Apps
                sx={{
                  height: "24px",
                  width: "24px",
                  color: "rgba(255, 255, 255, .87)",
                }}
              ></Apps>
            </IconButton>
          </Tooltip>
          <Tooltip title="Google Account">
            <IconButton>
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
            </IconButton>
          </Tooltip>
        </TooltipElements>
      </HeaderContainer>
      <HeaderLogoContainer>
        <img src="google-white-logo.png" alt="google-logo" />
        <div>
          <SearchInput />
        </div>
      </HeaderLogoContainer>
    </>
  );
}
