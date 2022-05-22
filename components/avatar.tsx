import React from 'react';
import { tailwindClass } from '../libs/client/utils';

interface AvatarProps {
  size: 'small' | 'midium' | 'large';
  imageUrl?: string;
}

export default function Avatar({ size, imageUrl }: AvatarProps) {
  return (
    <div
      className={tailwindClass(
        'rounded-full bg-slate-300',
        size === 'small'
          ? 'w-8 h-8'
          : size === 'midium'
          ? 'w-12 h-12'
          : 'w-16 h-16'
      )}
    />
  );
}
