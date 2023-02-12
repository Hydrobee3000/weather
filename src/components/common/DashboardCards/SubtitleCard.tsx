// title of parameters in cards into dashboard page

interface IProps {
  children: string | null
}

const SubtitleCard: React.FC<IProps> = ({ children }) => {
  return <span style={{ color: '#783fdbe2' }}>{children}</span>
}

export default SubtitleCard
