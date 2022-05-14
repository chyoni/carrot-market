import React from 'react';
import { tailwindClass } from '../libs/utils';
import Avatar from './avatar';

interface MessageProps {
  message: string;
  avatarUrl: string;
  reversed?: boolean;
}

export default function Message({
  message,
  avatarUrl,
  reversed,
}: MessageProps) {
  return (
    <div
      className={tailwindClass(
        'flex items-start space-x-2',
        reversed ? 'space-x-reverse flex-row-reverse' : ''
      )}
    >
      <Avatar size="small" imageUrl={avatarUrl} />
      <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-xl border-gray-300">
        <p>{message}</p>
      </div>
    </div>
  );
}
