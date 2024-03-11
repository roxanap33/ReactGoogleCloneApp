import { styled } from "@mui/system";

export const HeaderContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 6px;
  margin: 0 4px;
`;

export const LinkElements = styled("div")`
  display: flex;
  padding-right: 15px;
  gap: 2vw;

  a {
    display: inline-block;
    font-family: Roboto, arial, sans serif;
    font-size: 13px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TooltipElements = styled("div")`
  display: flex;
`;

export const HeaderLogoContainer = styled("div")`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  img {
    height: 92px;
    object-fit: contain;
  }
`;
