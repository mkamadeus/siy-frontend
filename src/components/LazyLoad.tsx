import React, { ReactNode } from 'react';

interface Props {
  isLoading: boolean | undefined;
  text?: ReactNode;
}

const LazyLoadText: React.FC<Props> = ({ isLoading, text }: Props) => {
  if (isLoading) {
    const width = Math.random() * 8 + 0.5;
    return (
      <div
        className="inline-block p-1 animate-pulse bg-gray-400 rounded-full"
        style={{ width: `${width}rem` }}
      />
    );
  }
  return <>{text}</>;
};

export default LazyLoadText;
