import React from 'react'
import TeamMember from "../teamMember";
import * as styles from "./styles.module.scss"

const index = ({teamList}) => {
  return (
    <div className={styles.teamList}>
        {teamList.allTeamJson.edges.map((teamMember, index)=>{
            return <TeamMember name={teamMember.node.name} description={teamMember.node.description} role={teamMember.node.role} imgUrl={teamMember.node.imgUrl.publicURL} linkedInUrl={teamMember.node.linkedInUrl} twitterUrl={teamMember.node.twitterUrl} githubUrl={teamMember.node.githubUrl} idx={index}/>
        })
        }
    </div>
  )
}

export default index
