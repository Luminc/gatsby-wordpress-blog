import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="card-columns">
      {data.allWordpressWpProjects.edges.map(project => (
        <div className="card">
          <Link
            to={`/project/${project.node.slug}`}
            key={project.node.wordpress_id}
          >
            <Img
              className="card-img"
              sizes={
                project.node.featured_media.localFile.childImageSharp.sizes
              }
              alt={project.node.title}
            />
          </Link>

          <div className="card-body">
            <Link
              to={`/project/${project.node.slug}`}
              key={project.node.wordpress_id}
            >
              <p className="overline">
                {project.node.acf.medium} — {project.node.acf.year}
              </p>
              <h5 className="card-title">{project.node.title}</h5>
            </Link>
          </div>
        </div>

        // <li

        //   style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
        // >
        //   <Link
        //     to={`/post/${post.node.slug}`}
        //     style={{ display: "flex", color: "black", textDecoration: "none" }}
        //   >
        //     <Img
        //       sizes={post.node.featured_media.localFile.childImageSharp.sizes}
        //       alt={post.node.title}
        //       style={{ width: "25%", marginRight: 20 }}
        //     />
        //     <div style={{ width: "75%" }}>
        //       <h3
        //         dangerouslySetInnerHTML={{ __html: post.node.title }}
        //         style={{ marginBottom: 0 }}
        //       />
        //       <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
        //     </div>
        //   </Link>
        // </li>
      ))}
    </div>
  </>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allWordpressWpProjects {
      edges {
        node {
          wordpress_id
          title
          slug
          content
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          acf {
            materials
            medium
            year
          }
        }
      }
    }
  }
`
