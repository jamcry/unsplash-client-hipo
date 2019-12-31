# 📸️ Unsplash Client App [![Build Status](https://travis-ci.com/jamcry/unsplash-client-hipo.svg?branch=master)](https://travis-ci.com/jamcry/unsplash-client-hipo)

This is a non-commercial Unsplash Client App developed with React. It helps users search for photos with specifying query and optionally selecting an collection. The app retrieves photos with the requires search query, using official Unsplash API.

## Installation & Usage

🔑 First of all, **make sure Unsplash and Google Maps API keys are accessible as environment variables**.

If you don't have the keys, you should [signup for a Unsplash developer account](https://unsplash.com/developers) and [enable Google Maps Platform](https://cloud.google.com/maps-platform/) with Google Account, then retrieve the API keys.

For bash environment, you can temporarily store your keys as follows:
```bash
export $UNSPLASH_ACCESS_KEY="<YOUR UNSPLASH API ACCESS KEY HERE>"
export $REACT_APP_GOOGLE_MAPS_API_KEY="<YOUR GOOGLE MAPS API KEY HERE>"
```

🚀 After cloning this repo and making sure you are in the project directory, install the dependencies and run the app via package manager  [npm](https://www.npmjs.com/):

```bash
npm install && npm start
```
This should run the app on [http://localhost:3000](http://localhost:3000). Then, you can try the app.

## Dependencies
This project depends on:
- [react-google-maps](https://github.com/tomchentw/react-google-maps) package for showing embedded maps