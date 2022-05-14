import type { NextPage } from 'next';
import Avatar from '../../components/avatar';
import HorizontalProfile from '../../components/horizontal-profile';
import Layout from '../../components/layout';

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div className="flex cursor-pointer space-x-2 py-3 px-4 items-center">
            <Avatar size="midium" />
            <HorizontalProfile
              title="Steve Jebs"
              subTitle="See you tomorrow in the corner atg 2pm!"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
