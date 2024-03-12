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
  border-bottom: 0.1px solid rgb(95, 99, 104);
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

      textarea {
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

// const StyledSubOptionsLeft = styled("div")`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 8px;
//   margin: 8px;
//   svg {
//     color: #969ba1;
//     font-size: 1rem;
//     margin-right: 8px;
//   }
//   a {
//     text-decoration: none;
//     font-size: 0.875rem;
//     font-family: Roboto, arial, sans-serif;
//     margin-right: 12px;
//     color: rgb(150, 155, 161);
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

export const SearchPageHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  svg {
    color: #e8eaed;
  }
`;
