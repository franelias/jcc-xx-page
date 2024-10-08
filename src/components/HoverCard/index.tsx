import React from 'react';
import { Card } from 'antd';

type HoverCardProps = {
    url: string;
    title?: string;
    subtitle?: JSX.Element;
    link?: string;
    noDarkmode?: boolean;
};

const HoverCard: React.FC<HoverCardProps> = ({ url, title, subtitle, link, noDarkmode }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {if (ref.current && noDarkmode) ref.current.style.setProperty('background-color', 'white', 'important')}, []);
    return (
        <div className="flex flex-col md:mt-0 mb-2 w-full ">
            <Card
                onClick={link ? () => window.open(link) : undefined}
                className="relative overflow-hidden rounded-lg shadow-lg"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'contain',
                    aspectRatio: '2240 / 1000',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: link ? 'pointer' : 'default',
                    transition: 'all 0.3s ease-in-out',
                }}
                ref={ref}
            >
            </Card>
            <div className="mt-3 tracking-[-0.015em]">
                <div className="text-[#151711] text-[18px] font-bold leading-tight">{title}</div>
                <div className="mt-1">{subtitle}</div>
            </div>
        </div>
    );
};


export default HoverCard;
