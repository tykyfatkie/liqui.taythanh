import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './homes/home-4'
import MetaComponent from "@/components/common/MetaComponent";


const metadata = {
  title: 'Giải Liên Quân Mobile trường THPT Tây Thạnh',
  description:
    'Giải Liên Quân Mobile - Trường THPT Tây Thạnh',
}

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain/>
    </Wrapper>
    
  )
}
