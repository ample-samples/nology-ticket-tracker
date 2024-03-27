type TeamMember = {
  id: number,
  name: string,
  role: string,
  profile: {
    experience: string,
    department: string,
    techstack: string[],
    profilePicture:
    string,
  },
}

type Team = TeamMember[]

export type {TeamMember, Team}
