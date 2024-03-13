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

export const FooterContainer = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #171717;
  width: 100%;
`;

export const UpperFooter = styled("div")`
  border-bottom: 1px solid #3c4043;
  font-size: 15px;
  color: #e8eaed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: arial, sans serif;
  font-size: 15px;
  padding: 15px 30px;
`;

export const BottomFooter = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const BottomFooterLeft = styled("div")`
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    font-family: arial, sans serif;
    font-size: 14px;
    text-decoration: none;
    color: #e8eaed;
    padding: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BottomFooterRight = styled("div")`
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    font-family: arial, sans serif;
    font-size: 14px;
    text-decoration: none;
    color: #e8eaed;
    padding: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
