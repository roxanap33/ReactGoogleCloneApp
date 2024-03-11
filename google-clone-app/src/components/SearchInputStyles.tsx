import { styled } from "@mui/system";
import { Search, Mic } from "@mui/icons-material";

export const SearchContainer = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const SearchInputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 14px 0 14px;
  max-width: 584px;
  border: 1px solid #5f6368;
  border-radius: 300px;
  min-height: 30px;
  width: 60%;

  //   textarea {
  //     flex: 1;
  //     background-color: rgba(32, 33, 36, 1);
  //     border: none;
  //     resize: none;
  //     margin: 0 0 8px;
  //     height: 20px;
  //     word-wrap: break-word;
  //     color: white;

  //     &:focus {
  //       outline-width: 0;
  //     }
  //   }
`;

export const SearchTextArea = styled("textarea")`
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
