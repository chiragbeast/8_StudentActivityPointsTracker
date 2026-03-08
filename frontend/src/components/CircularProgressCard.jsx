const CircularProgressCard = ({
  instituteValue = 28,
  instituteTotal = 40,
  departmentValue = 20,
  departmentTotal = 40
}) => {
  const size = 220;
  const strokeWidth = 16;

  const outerRadius = (size - strokeWidth) / 2;
  const outerCircumference = 2 * Math.PI * outerRadius;
  const outerArcLength = outerCircumference * 0.75;

  const innerRadius = outerRadius - 26;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerArcLength = innerCircumference * 0.75;

  const instituteProgress = (instituteValue / instituteTotal) * outerArcLength;
  const departmentProgress = (departmentValue / departmentTotal) * innerArcLength;

  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>

        <svg width={size} height={size} style={{overflow: 'visible'}}>
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            {/* Outer track */}
            <circle cx={size/2} cy={size/2} r={outerRadius} fill="transparent"
              stroke="#e5e7eb" strokeWidth={strokeWidth}
              strokeDasharray={`${outerArcLength} ${outerCircumference}`} strokeLinecap="round" />
            {/* Institute progress */}
            <circle cx={size/2} cy={size/2} r={outerRadius} fill="transparent"
              stroke="#4a90e2" strokeWidth={strokeWidth}
              strokeDasharray={`${instituteProgress} ${outerCircumference}`} strokeLinecap="round" />
            {/* Inner track */}
            <circle cx={size/2} cy={size/2} r={innerRadius} fill="transparent"
              stroke="#e5e7eb" strokeWidth={strokeWidth}
              strokeDasharray={`${innerArcLength} ${innerCircumference}`} strokeLinecap="round" />
            {/* Department progress */}
            <circle cx={size/2} cy={size/2} r={innerRadius} fill="transparent"
              stroke="#d487b8" strokeWidth={strokeWidth}
              strokeDasharray={`${departmentProgress} ${innerCircumference}`} strokeLinecap="round" />
          </g>

          {/* INSTITUTE label at outer arc start (north of outer circle) */}
          <text
            x={70}
            y={10}
            textAnchor="middle"
            fill="#4a90e2"
            fontSize="10"
            fontWeight="700"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >INSTITUTE</text>

          {/* DEPARTMENT label at inner arc start (north of inner circle) */}
          <text
            x={60}
            y={36}
            textAnchor="middle"
            fill="#d487b8"
            fontSize="10"
            fontWeight="700"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >DEPARTMENT</text>
        </svg>
      </div>

      {/* Stats */}
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '12px'}}>
        <div>
          <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#4a90e2'}}>{instituteValue}/{instituteTotal}</div>
          <div style={{fontSize: '0.72rem', color: '#9ca3af', letterSpacing: '1px'}}>INSTITUTE</div>
        </div>
        <div>
          <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#d487b8'}}>{departmentValue}/{departmentTotal}</div>
          <div style={{fontSize: '0.72rem', color: '#9ca3af', letterSpacing: '1px'}}>DEPARTMENT</div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressCard;
