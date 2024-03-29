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
} from "../assets/styles/SearchPageStyles";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { IconButton, Tooltip } from "@mui/material";
import { Apps, MoreVert, Settings } from "@mui/icons-material";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import LogoDisplay from "../components/LogoDisplay";
import Authenticate from "../authentication/Authenticate";

interface ResultMap {
  [key: string]: string;
}
interface SearchResult {
  resultsMap: ResultMap;
  searchTerm: string;
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
      const q = query(collection(db, "results"));
      const querySnapshot = await getDocs(q);
      const resultsArray: SearchResult[] = querySnapshot.docs.map((doc) => ({
        resultsMap: doc.data().resultsMap as ResultMap,
        searchTerm: doc.data().searchTerm as string,
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
                <LogoDisplay />
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
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <Authenticate />
            </div>
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
      {results.some(
        (r) => r.searchTerm && r.searchTerm.includes(searchedValue!)
      ) ? (
        results
          .filter((r) => r.searchTerm && r.searchTerm.includes(searchedValue!))
          .map((result) =>
            Object.entries(result.resultsMap || {}).map(([key, value]) => (
              <SearchResultContainer key={key}>
                <ResultTitle>{key}</ResultTitle>
                <ResultLink href={value}>{value}</ResultLink>
              </SearchResultContainer>
            ))
          )
      ) : (
        <SearchResultContainer>
          Curerently there are no results for your search.
        </SearchResultContainer>
      )}
    </>
  );
}
