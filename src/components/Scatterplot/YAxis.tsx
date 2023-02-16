import { useRef } from 'react';
import { useRefDimensions } from '../../hooks/use-ref-dimensions';

type Props = {
  featureName: string;
  gridArea: string;
};
const YAxis = ({ featureName, gridArea }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = useRefDimensions(divRef);

  return (
    <div ref={divRef} className="relative" style={{ gridArea }}>
      <svg className="absolute" viewBox={`0 0 ${width} ${height}`}>
        <text
          textAnchor="middle"
          x="0"
          y="0"
          transform={`translate(${width / 4}, ${height / 2}) rotate(-90)`}
        >
          {featureName}
        </text>
      </svg>
    </div>
  );
};
export default YAxis;
