import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  LinkElements,
  TooltipElements,
  FooterContainer,
  UpperFooter,
  BottomFooter,
  BottomFooterLeft,
  BottomFooterRight,
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
          <SearchInput showButtons={true} showText={true} />
        </div>
      </HeaderLogoContainer>
      <FooterContainer>
        <UpperFooter>Romania</UpperFooter>
        <BottomFooter>
          <BottomFooterLeft>
            <Link
              to={
                "https://about.google/?utm_source=google-RO&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              }
            >
              About
            </Link>
            <Link
              to={
                "https://ads.google.com/intl/en_ro/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              }
            >
              Advertising
            </Link>
            <Link
              to={
                "https://www.google.ro/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none"
              }
            >
              Business
            </Link>
            <Link to={"https://www.google.com/search/howsearchworks/?fg=1"}>
              How Search works
            </Link>
          </BottomFooterLeft>
          <BottomFooterRight>
            <Link to={"https://policies.google.com/privacy?hl=en-RO&fg=1"}>
              Privacy
            </Link>
            <Link to={"https://policies.google.com/terms?hl=en-RO&fg=1"}>
              Terms
            </Link>
            <Link to={""}>Settings</Link>
          </BottomFooterRight>
        </BottomFooter>
      </FooterContainer>
    </>
  );
}
