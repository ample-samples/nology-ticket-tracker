import { Team } from "../../types/TeamExt"
import MemberCard from "../../components/MemberCard/MemberCard"

type HomeProps = {
  team: Team
}

const Home = ({ team }: HomeProps) => {
  return (
    <section className="main">
      {team.map(member => <MemberCard member={member} key={member.id} />)}
    </section>
  )
}

export default Home
