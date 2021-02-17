import React from 'react';

interface Props {
  isLoading: boolean | undefined;
  path?: string;
  alt?: string;
}

const LazyLoadImage: React.FC<Props> = ({ isLoading, path, alt }: Props) => {
  if (isLoading) {
    return (
      <div className="inline-block p-1 animate-pulse bg-gray-400 rounded-full w-32 h-32" />
    );
  }
  return (
    <img
      src={path}
      alt={alt}
      className="h-32 w-32 object-cover shadow rounded-full"
    />
  );
};

export default LazyLoadImage;
