const TrophyIcon = ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M25.5,29.5h-19A1.5,1.5,0,0,1,5,28V26h22v2A1.5,1.5,0,0,1,25.5,29.5ZM27,24H5V15A11,11,0,0,1,16,4.17,11,11,0,0,1,27,15Z"
            fill={color}
        />
    </svg>
);

export default TrophyIcon;
