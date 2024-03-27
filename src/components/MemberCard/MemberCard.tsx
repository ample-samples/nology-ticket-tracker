import { TeamMember } from "../../types/TeamExt"

type MemberCardProps = {
  member: TeamMember
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <section className="member-card">
			<h2 className="member-card__name">{member.name}</h2>
    </section>
  )
}

export default MemberCard
