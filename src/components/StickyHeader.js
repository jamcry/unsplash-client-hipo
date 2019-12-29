import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./StickyHeader.css";
import SearchForm from './SearchForm';

export default class StickyHeader extends Component {
  render() {
    return (
      <header className="sticky-header">
        <div className="brand">
          <Link to="/">
            imagesearch
          </Link>
        </div>
        <div className="header-form">
          {/*<SearchForm />*/}
        </div>
      </header>
    )
  }
}