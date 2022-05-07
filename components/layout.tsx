import React from 'react';
import { tailwindClass } from '../libs/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div
        className="w-full text-lg font-medium fixed bg-white
       text-gray-700 top-0 flex items-center justify-center"
      >
        <div className="bg-white flex items-center justify-center py-3 mx-auto border-b w-[512px] 2xl:w-1/3">
          {title ? <span>{title}</span> : null}
        </div>
      </div>
      <div className={tailwindClass('pt-16', hasTabBar ? 'pb-16' : '')}>
        {children}
      </div>
      {hasTabBar ? (
        <nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center"></nav>
      ) : null}
    </div>
  );
}
