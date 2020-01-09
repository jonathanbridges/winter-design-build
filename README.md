## Technologies Used

I bootstrapped this project using `create-react-app` and a template I found on Colorlib. I made individual components for each portfolio section, converting the template HTML into React JSX files.

Each Portfolio component passes image and caption props to a reusable lightbox component which was created using the package `react-image-lightbox`.

Routing was handled by `react-router`'s HashRouter.

The image carousel found on the home page is created using `react-owl-carousel2` package.

## A Small Technical Challenge

After starting work on creating a system to handle email submissions, I found out that sites hosted on GitHub pages can only serve static pages - meaning that I wouldn't be able to create my own Express server or have any real backend. After doing some research on alternatives I settled on using `Formspree.io`, a 3rd-party service, which allows axios POST requests to its API to be received from a front end.

The Contact component is the only component that uses state, following standard react input and submit methods.

## Local Instructions:

To run the project locally:

1) Clone the repo
2) `cd` to the root folder
3) `npm start`
4) Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
