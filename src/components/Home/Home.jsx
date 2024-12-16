import React from 'react'
import Btn from '../Btn/Btn';
import logo from "../../assets/images 1.png"
import "./Home.css"
import Input from '../Input/Input';
import Chips from '../Chips/Chips';
import iconChat from "../../assets/Vector (8).png";
import iconArchived from "../../assets/Frame 11678 (1).png";
import iconImages from "../../assets/Frame 11678 (2).png";
import Topic from '../Topic/Topic';
import { NavLink } from 'react-router';


const Home = () => {
  return (
    <div className="home">
      <div className='homeHeader'>
            <h1>Start a new chat <br /> with</h1>
            <img src={logo} alt="logo" />
            <h2>Chat bot AI</h2>
            <NavLink to={"/Internal"}>            
              <Btn ClassCss="btn-g" val = "+ New Topic" />
            </NavLink>      
      </div>
      <div className="history">
        <h3>History</h3>
        <Input type="search"  placeholder="Search..."/>
        <div className="tabs">
          <Chips icon = {iconChat} text ="Chats" ClassCss = "active tab"/>
          <Chips icon = {iconArchived} text ="Archived" ClassCss = "tab"/>
          <Chips icon = {iconImages} text ="Images" ClassCss = "tab"/>
        </div>
        <div className="chats">
          <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
            <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
            <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
            <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
            <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
            <Topic heading="How can I forget a bad memory?"
           content="Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained ..."
            date="28 mins ago" />
        </div>
      </div>
    </div>
  )
}

export default Home;
