
interface ScoreBadgeProps {
    score: number;
}

const Scorebadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let BadgeColor = '';
    let BadgeText = '';

    if (score > 70) {
        BadgeColor = 'bg-badge-green text-green-600'
        BadgeText = 'Strong'
    } else if (score > 49) {
        BadgeColor = 'bg-badge-yellow text-yellow-600'
        BadgeText = 'Good Start'
    } else {
        BadgeColor = 'bg-badge-red text-red-600'
        BadgeText = 'Need Work'
    }

    return (
        <div className={`px-3 py-1 rounded-full ${BadgeColor}`}>
            <p className="text-sm font-medium">{BadgeText}</p>
        </div>
    )
}

export default Scorebadge