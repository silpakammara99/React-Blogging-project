import { useLocation } from "react-router";

import "./homestyle.css";
import Header from "../../components/headers/header";
import Posts from "../../components/posts/posts";
import Sidebar from './../../components/sidebar/sidebar';

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
     <Header/>
      <div className="home">
     <Posts/>
       <Sidebar/>
      </div>
    </>
  );
}