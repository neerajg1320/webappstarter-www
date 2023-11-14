import React from 'react'
import Navbar from '../components/navbar'
import TeamList from "../components/page-team/teamList"
import { graphql } from 'gatsby'

const team = ({data}) => {

    console.log(data)
  return (
    <>
      <Navbar/>
      <TeamList teamList={data}/>
    </>
  )
}

export default team

export const teamList = graphql`query MyQuery {
    allTeamJson {
      edges {
        node {
          githubUrl
          imgUrl {
            publicURL
          }
          linkedInUrl
          description
          name
          role
          twitterUrl
        }
      }
    }
  }`
