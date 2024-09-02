// import backgroundImage from '../../assets/searchBg.png'; // Adjust the path as necessary
// import styled from 'styled-components';
// // import { RiArrowDropDownLine } from "react-icons/ri";
// import  CourseCards  from '../CourseCards/CourseCards';
// import { useState } from 'react';
// import DropdownButton from "../CourseCards/Dropdown"

// const SearchContainer = styled.div`
//   background-image: url(${backgroundImage}); // Replace with your image path
//   padding: 80px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px 0 0 4px;
//   background-size: cover; 
//   background-position: center;
//   margin-top: 3rem;
// `;

// const SearchInput = styled.input`
//   ${'' /* width: calc(100% - 120px); */}
//   width: 630px;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px 0 0 4px;
// `;

// const SearchButton = styled.button`
//   width: 120px;
//   padding: 10px;
//   font-size: 16px;
//   background-color: #49BBBD;
//   color: white;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   cursor: pointer;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap:20px;
//   margin-top: 10px;
// `;

// // const FilterButton = styled.button`
// //   padding: 8px 12px;
// //   font-size: 14px;
// //   background-color: white;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   font-weight: 500;
// // `;
// const styleSearch ={
//   display:"flex",
//   alignItems:"center",
//   justifyContent:"center",
// }

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [subjectFilter, setSubjectFilter] = useState('');
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleSubjectSelect = (subject) => {
//     setSubjectFilter(subject);
//   };

//   return (
//     <>
//     <SearchContainer>
//     <div style={styleSearch}><SearchInput      value={searchTerm}
//             onChange={handleSearchChange} placeholder="Search your favourite course" />
//     <SearchButton>Search</SearchButton></div>
       
//     <FilterContainer>
//     <DropdownButton 
//             label="Subject" 
//             options={['All', 'Development', 'Programming', 'Design']} 
//             onSelect={handleSubjectSelect}
//           />
//           <DropdownButton label="Program" options={['Program 1', 'Program 2', 'Program 3']} />
//           <DropdownButton label="Language" options={['English', 'Spanish', 'French']} />
//           <DropdownButton label="Availability" options={['Available', 'Not Available']} />
//           <DropdownButton label="Learning Type" options={['Self-paced', 'Instructor-led']} />
//         </FilterContainer>
//     </SearchContainer>
//     <CourseCards searchTerm={searchTerm} subjectFilter={subjectFilter}/>
//     </>
//   );
// };


// export default Search;


import backgroundImage from '../../assets/searchBg.png'; // Adjust the path as necessary
import styled from 'styled-components';
import CourseCards from '../CourseCards/CourseCards';
import { useState } from 'react';
import DropdownButton from "../CourseCards/Dropdown";

const SearchContainer = styled.div`
  background-image: url(${backgroundImage});
  padding: 60px 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-size: cover; 
  background-position: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    margin-top: 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 630px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 4px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubjectSelect = (subject) => {
    setSubjectFilter(subject);
  };

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search your favourite course"
          />
          <SearchButton>Search</SearchButton>
        </SearchWrapper>

        <FilterContainer>
          <DropdownButton
            label="Subject"
            options={['All', 'Development', 'Programming', 'Design']}
            onSelect={handleSubjectSelect}
          />
          <DropdownButton label="Program" options={['Program 1', 'Program 2', 'Program 3']} />
          <DropdownButton label="Language" options={['English', 'Spanish', 'French']} />
          <DropdownButton label="Availability" options={['Available', 'Not Available']} />
          <DropdownButton label="Learning Type" options={['Self-paced', 'Instructor-led']} />
        </FilterContainer>
      </SearchContainer>
      <CourseCards searchTerm={searchTerm} subjectFilter={subjectFilter} />
    </>
  );
};

export default Search;
