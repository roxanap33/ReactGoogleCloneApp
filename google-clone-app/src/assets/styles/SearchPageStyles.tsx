import { styled } from "@mui/system";

export const SearhcPageHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SearchHeaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const SearchPageHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
`;

export const SearchPageInput = styled("div")`
  margin-top: 20px;
  padding-left: 0;
  form {
    div {
      justify-content: flex-start;
      margin-bottom: 22px;

      input {
        width: 550px;
      }
    }
  }
`;

export const SearchPageLogo = styled("div")`
  padding: 4px 0 0 30px;

  img {
    height: 40px;
    margin: 20px;
    object-fit: contain;
  }
`;

export const SearchPageHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  svg {
    color: #e8eaed;
  }
`;

export const SearchPageHeaderSubMenu = styled("div")`
  display: flex;
  align-items: center;
  padding-inline-start: 50px;
  border-bottom: 0.1px solid rgb(95, 99, 104);

  a {
    text-decoration: none;
    font-size: 15px;
    font-family: Google Sans, arial, sans-serif-medium, sans-serif;
    //padding-left: 15px;
    padding-right: 30px;
    color: rgb(150, 155, 161);
    margin-bottom: 15px;
    &:hover {
    text-decoration: underline;
}
`;

export const SubMenuElement = styled("div")`
  display: flex;
  align-items: center;
  color: #969ba1;

  svg {
    margin-bottom: 15px;
  }
`;

export const SearchResultContainer = styled("div")`
  margin-top: 30px;
  margin-inline-start: 50px;
`;

export const ResultTitle = styled("h3")`
  margin: 0;
  padding: 0;
  color: #1a0dab;
`;

export const ResultLink = styled("a")`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
