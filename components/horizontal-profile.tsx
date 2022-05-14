import React from 'react';

interface HorizontalProfileProps {
  title: string;
  subTitle: string;
}

export default function HorizontalProfile({
  title,
  subTitle,
}: HorizontalProfileProps) {
  return (
    <div className="flex flex-col">
      <span className="font-medium text-gray-900">{title}</span>
      <span className="text-sm text-gray-700">{subTitle}</span>
    </div>
  );
}
