import styled from 'styled-components';
import { FiGrid, FiFileText, FiClock, FiFolder, FiInbox, FiSettings, FiBell } from 'react-icons/fi';
import { useState } from 'react';
import avatarImage from "../../assets/person4.png"
import StatisticsSection from './StatisticsSection';
import Performance from './Performance';
// import Performance from './Performace';

const AppContainer = styled.div`
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

const SidebarItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    ${'' /* background-color: #f0f0f0; */}
  }
  ${props => props.active && `
    background-color: #49BBBD;
    color: white;
  `}
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 15px;
  width: 300px;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CourseCards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.color};
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

// const Chart = styled.div`
//   flex: 1;
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 5px rgba(0,0,0,0.1);
// `;

const LeaderBoard = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ProfileSidebar = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const TodoList = styled.div`
  margin-top: 20px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

function StudentDashboard() {
    const [activeTab, setActiveTab] = useState('Overview');
    // const performanceValue = 8966;
    // const timeOptions = [
    //   { value: 'monthly', label: 'Monthly' },
    //   { value: 'weekly', label: 'Weekly' },
    //   { value: 'daily', label: 'Daily' },
    // ];
  return (
    <AppContainer>
     <Sidebar>
      <Logo>Learninja</Logo>
      <SidebarItem active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')}>
        <FiGrid /> Overview
      </SidebarItem>
      <SidebarItem active={activeTab === 'Assignment'} onClick={() => setActiveTab('Assignment')}>
        <FiFileText /> Assignment
      </SidebarItem>
      <SidebarItem active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')}>
        <FiClock /> Reports
      </SidebarItem>
      <SidebarItem active={activeTab === 'File Storage'} onClick={() => setActiveTab('File Storage')}>
        <FiFolder /> File Storage
      </SidebarItem>
      <SidebarItem active={activeTab === 'Inbox'} onClick={() => setActiveTab('Inbox')}>
        <FiInbox /> Inbox
      </SidebarItem>
      <SidebarItem active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')}>
        <FiSettings /> Settings
      </SidebarItem>
    </Sidebar>
      <MainContent>
        <Header>
          <div>
            <h1>Hello Maietry 👋</h1>
            <p>Lets learn something new today!</p>
          </div>
          <SearchBar>
            <input type="text" placeholder="Search from courses..." />
          </SearchBar>
          <ProfileSection>
            <FiBell />
            <span>Profile</span>
          </ProfileSection>
        </Header>
        <CourseCards>
          <Card color="#e6e6fa">Basic: HTML and CSS</Card>
          <Card color="#fff0f5">Branding Design</Card>
          <Card color="#f0fff0">Motion Design</Card>
        </CourseCards>
        <StatsContainer>
          {/* <Chart> */}
          
            <StatisticsSection/>
          {/* </Chart> */}
          {/* <Chart> */}
            
            {/* <Performance performanceValue={performanceValue} timeOptions={timeOptions} /> */}
            <Performance />
          {/* </Chart> */}
        </StatsContainer>
        <LeaderBoard>
          <h3>Leader Board</h3>
          {/* Add table component here */}
        </LeaderBoard>
      </MainContent>
      <ProfileSidebar>
        <ProfilePic src={avatarImage} alt="Maietry Prajapati" />
        <h2>Maietry Prajapati</h2>
        <p>College Student</p>
        {/* Add calendar component here */}
        <TodoList>
          <h3>To Do List</h3>
          <TodoItem>
            <input type="checkbox" />
            <span>Developing Restaurant Apps</span>
          </TodoItem>
          <TodoItem>
            <input type="checkbox" />
            <span>Integrate API</span>
          </TodoItem>
          {/* Add more todo items */}
        </TodoList>
      </ProfileSidebar>
    </AppContainer>
  );
}

export default StudentDashboard;