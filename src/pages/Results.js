import React, { Component } from "react";
import GridGallery from "../components/gallery/GridGallery";
import StickyHeader from "../components/layout/StickyHeader";
import { withRouter } from "react-router-dom";
import Pagination from "../components/layout/Pagination";
import "./Results.css";

class Results extends Component {
  state = {
    query: "",
    collection: "",
    isLoading: true,
    data: null,
    error: null,
    currentPage: 1
  }

  getResults = () => {
    const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || "";
    if (!process.env.REACT_APP_UNSPLASH_ACCESS_KEY) {
      console.warn("Couldn't get the API key from environment! Check your configuration.");
    }
    const {query, collection, currentPage} = this.state;
    const url = `https://api.unsplash.com/search/photos?query=${query}&collections=${collection}&client_id=${UNSPLASH_ACCESS_KEY}&page=${currentPage}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ isLoading: false, data })
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err })
      })
  }

  componentDidMount = () => {
    this.getResults();
  }

  componentDidUpdate = () => {
    const {query, collection} = this.props.match.params;
    // Check route parameter for changes
    if(query !== this.state.query || collection !== this.state.collection) {
      this.setState({ isLoading: true, data: null, query, collection}, this.getResults)
    }
  }

  // Increments the current page number and fetches images for new page number
  incrementPageNumber = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }),this.getResults);
  }

  // Decrements the current page number and fetches images for new page number
  decrementPageNumber = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }), this.getResults);
  }

  render() {
    // Get the search parameters from the router
    const { collection, query } = this.props.match.params;

    return (
      <div className="results container">
        <div className="header">
          {/* Key prop ensures re-render of StickyHeader therefore SearchForm 
            in case of route change */}
          <StickyHeader key={query+"_"+collection} />
        </div>
        <div className="content">
          <h2>Search Results for {this.state.query}</h2>
          {this.state.isLoading && <h1>Loading...</h1>}
          {this.state.error && <h1>Problem fetching images! ({this.state.error.message})</h1>}
          {this.state.data && 
            <>
              <GridGallery imageList={this.state.data.results || []} />
              <Pagination
                totalPages={this.state.data.total_pages}
                currentPage={this.state.currentPage}
                decrementPageNumber={this.decrementPageNumber}
                incrementPageNumber={this.incrementPageNumber}
              />
            </>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Results); 