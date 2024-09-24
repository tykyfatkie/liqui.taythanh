
import HomeMain from "@/components/home-4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Giải Liên Quân Mobile - Trường THPT Tây Thạnh',
  description:
    'Giải Liên Quân Mobile - Trường THPT Tây Thạnh',
}

const HomePage4 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage4
