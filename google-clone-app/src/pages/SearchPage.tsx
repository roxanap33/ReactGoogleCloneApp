import React, { useEffect, useState } from "react";
import {
  SearhcPageHeaderContainer,
  SearchHeaderWrapper,
  SearchPageHeaderLeft,
  SearchPageLogo,
  SearchPageHeaderRight,
  SearchPageInput,
  SearchPageHeaderSubMenu,
  SubMenuElement,
  SearchResultContainer,
  ResultTitle,
  ResultLink,
} from "../components/SearchPageStyles";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Apps, MoreVert, Settings } from "@mui/icons-material";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

interface SearchResult {
  id: string;
  title: string;
  link: string;
}

export default function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchedValue = queryParams.get("key");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    fetchResults();
  }, [searchedValue]);

  const fetchResults = async () => {
    if (searchedValue) {
      const q = query(
        collection(db, `results/${searchedValue}/${searchedValue}`)
      );
      const querySnapshot = await getDocs(q);
      const resultsArray: SearchResult[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title as string,
        link: doc.data().link as string,
      }));
      setResults(resultsArray);
    }
  };

  return (
    <>
      <SearhcPageHeaderContainer>
        <SearchHeaderWrapper>
          <SearchPageHeaderLeft>
            <Link to="/">
              <SearchPageLogo>
                <img src="google-white-logo.png" alt="google-logo" />
              </SearchPageLogo>
            </Link>
            <SearchPageInput>
              <SearchInput searchedValue={searchedValue ? searchedValue : ""} />
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
      <SearchPageHeaderSubMenu>
        <Link to="/all">All</Link>
        <Link to="/images">Images</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/news">News</Link>
        <Link to="/books">Books</Link>
        <SubMenuElement>
          <MoreVert />
          <Link to="/more">More</Link>
        </SubMenuElement>
      </SearchPageHeaderSubMenu>
      {results.map((result) => (
        <SearchResultContainer key={result.id}>
          <ResultTitle>{result.title}</ResultTitle>
          <ResultLink href={result.link}>{result.link}</ResultLink>
        </SearchResultContainer>
      ))}
    </>
  );
}
