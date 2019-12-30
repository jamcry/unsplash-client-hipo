import React, {Component} from "react";
import "./Home.css";
import SearchForm from "../components/SearchForm";
import { ReactComponent as AppLogo } from "../logo.svg";

export default class Home extends Component {
  state = {
    query: "",
    collection: "",
    searchSubmitted: false
  };

  render() {
    return (
      <div className="home container">
        <div className="home-content">
          <AppLogo />
          <span className="brand"><span className="bold">image</span> search</span>
          <SearchForm className="test" />
        </div>
      </div>
    )
  }
}