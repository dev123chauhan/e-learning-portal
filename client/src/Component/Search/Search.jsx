import backgroundImage from '../../assets/searchBg.png'; // Adjust the path as necessary
import styled from 'styled-components';
import { RiArrowDropDownLine } from "react-icons/ri";
import  CourseCards  from '../CourseCards/CourseCards';
const SearchContainer = styled.div`
  background-image: url(${backgroundImage}); // Replace with your image path
  padding: 60px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-size: cover;
  background-position: center;
`;

const SearchInput = styled.input`
  ${'' /* width: calc(100% - 120px); */}
  width: 630px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
`;

const SearchButton = styled.button`
  width: 120px;
  padding: 10px;
  font-size: 16px;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  margin-top: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;
const styleSearch ={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
}

const Search = () => {
  return (
    <>
    <SearchContainer>
    <div style={styleSearch}><SearchInput placeholder="Search your favourite course" />
    <SearchButton>Search</SearchButton></div>
       
      <FilterContainer>
        <FilterButton>Subject <RiArrowDropDownLine /></FilterButton>
        <FilterButton>Partner <RiArrowDropDownLine /></FilterButton>
        <FilterButton>Program <RiArrowDropDownLine /></FilterButton>
        <FilterButton>Language <RiArrowDropDownLine /></FilterButton>
        <FilterButton>Abaliability <RiArrowDropDownLine /></FilterButton>
        <FilterButton>Learning Type <RiArrowDropDownLine /></FilterButton>
      </FilterContainer>
    </SearchContainer>
    <CourseCards/>
    </>
  );
};

export default Search;
