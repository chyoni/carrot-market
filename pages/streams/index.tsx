import type { NextPage } from 'next';
import FloatingButton from '../../components/floating-button';
import Layout from '../../components/layout';

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="px-4 space-y-4 divide-y-2">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div className="pt-4 px-4" key={i}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-lg text-gray-700 mt-2">Let's try potatos</h3>
          </div>
        ))}
        <FloatingButton type="streams" href="streams/create" />
      </div>
    </Layout>
  );
};

export default Stream;
