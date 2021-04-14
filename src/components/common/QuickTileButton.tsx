import { Link } from '@reach/router';
import React, { ReactNode } from 'react';

interface Props {
  to: string;
  icon: ReactNode;
  title: string;
}

const QuickTileButton: React.FunctionComponent<Props> = ({
  to,
  icon,
  title,
}: Props) => {
  return (
    <Link
      to={to}
      className="flex flex-col justify-center items-center h-24 w-24 p-1 rounded shadow border border-gray-300"
    >
      <div className="w-14 h-14 p-1 text-blue-500">{icon}</div>
      <div className="text-xs text-blue-500 text-center">{title}</div>
    </Link>
  );
};

export default QuickTileButton;
