import React from 'react';

interface TextAreaProps {
  placeholder?: string;
  [key: string]: any;
}

export default function TextArea({ placeholder, ...rest }: TextAreaProps) {
  return (
    <textarea
      className="mt-1 shadow-sm w-full focus:ring-orange-400 rounded-md border-gray-300 focus:border-orange-400 "
      rows={4}
      placeholder={placeholder !== '' ? placeholder : ''}
      {...rest}
    />
  );
}
