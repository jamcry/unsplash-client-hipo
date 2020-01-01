import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./StickyHeader.css";
import SearchForm from './SearchForm';
import { ReactComponent as AppLogo } from "../../logo.svg";

export default class StickyHeader extends Component {
  render() {
    return (
      <header className="sticky-header">
        <div className="sticky-header-container">
          <div className="logo-container">
            <Link to="/">
              <AppLogo />
            </Link>
          </div>
          <SearchForm />
        </div>
      </header>
    )
  }
}