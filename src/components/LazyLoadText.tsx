import React, { ReactNode } from 'react';

interface Props {
  isLoading: boolean | undefined;
  fit?: boolean;
  text?: ReactNode;
}

const LazyLoadText: React.FC<Props> = ({ isLoading, text, fit }: Props) => {
  if (isLoading) {
    const width = fit
      ? `${Math.random() * 100}%`
      : `${Math.random() * 8 + 0.5}rem`;
    return (
      <div
        className="inline-block p-1 animate-pulse bg-gray-400 rounded-full"
        style={{ width }}
      />
    );
  }
  return <>{text}</>;
};

export default LazyLoadText;
