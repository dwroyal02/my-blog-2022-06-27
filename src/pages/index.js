import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react"
import Layout from '../components/layout';

// styles

// markup
const IndexPage = () => {
  return (
   
      <Layout pageTitle="home Page">
          <h1>Home Page</h1>
          <p>
            I'm trying to make this blog.
          </p>
          <StaticImage  
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
          
      </Layout>
      
  )
}

export default IndexPage;
