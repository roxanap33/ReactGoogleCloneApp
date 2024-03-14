import { styled } from "@mui/system";
import { Search, Mic } from "@mui/icons-material";

export const SearchContainer = styled("div")`
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: center;
`;

export const SearchInputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px 0 14px;
  width: 500px;
  border: 1px solid #5f6368;
  border-radius: 300px;
  min-height: 30px;
  box-sizing: border-box;
`;

export const SearchInputArea = styled("input")`
  flex: 1;
  background-color: rgba(32, 33, 36, 1);
  border: none;
  resize: none;
  margin: 0 0 8px;
  height: 20px;
  word-wrap: break-word;
  color: white;

  &:focus {
    outline-width: 0;
  }
`;

export const SearchIcon = styled(Search)`
  font-size: 20px;
  margin-right: 5px;
  margin-bottom: 7px;
`;

export const MicrofonIcon = styled(Mic)`
  font-size: 20px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const SearchButtonsContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 18px 20px 20px 20px;
`;

export const SearchButtons = styled("button")`
  background-color: #303134;
  border: 1px solid #303134;
  border-radius: 4px;
  color: #e8eaed;
  font-family: arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    padding: 0 8px;
    min-width: 110px;
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const TextSectionContainer = styled("div")`
  font-size: small;
  text-align: center;
  margin-bottom: 24px;
`;

export const TextSection = styled("div")`
  a {
    padding: 0 3px;
    color: ##8ab4f8;
    text-decoration: none;
  }
`;
