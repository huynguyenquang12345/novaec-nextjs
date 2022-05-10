import Image, { ImageProps } from 'next/image';

export interface HomeBannerItemProps {
  imgProps: ImageProps;
  activated?: boolean;
  title: string;
  desc: string;
}

const HomeBannerItem: React.FC<HomeBannerItemProps> = ({ imgProps, activated, title, desc }) => (
  <div className="relative">
    <Image width={683} height={330} layout="responsive" alt="banner image" {...imgProps} />
    <div className={`absolute p-3 top-1/2 -translate-y-1/2 lg:p-6 bg-nova-dark-blue-2 bg-opacity-60 text-white max-w-[50%] sm:max-w-sm xl:max-w-[34.40703%] max-h-[48.31265%] overflow-y-auto o-bannerContent_scrollbar transition-all ease-linear duration-700 ${activated ? 'left-[8.78477%] z-10' : '-left-24 opacity-0'}`}>
      <h2 className="font-bold mb-1 leading-5 text-sm lg:mb-0 lg:leading-[2.75rem] lg:text-[2.375rem]" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="leading-[1.125rem] text-xs lg:text-base lg:leading-6" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  </div>
);

HomeBannerItem.defaultProps = {
};

export default HomeBannerItem;
