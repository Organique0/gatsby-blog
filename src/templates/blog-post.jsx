import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({data}) {
    const post = data.markdownRemark;
    console.log(post);
    return (
      <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div>{post.frontmatter.date}</div>
          <div dangerouslySetInnerHTML={{__html:post.html}}/>
        </div>
      </Layout>
    )
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      date
    }
  }
}
`