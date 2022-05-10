import { useRef, useState } from 'react';
import Slider from "react-slick";
import HomeBannerItem, { HomeBannerItemProps } from 'components/molecules/HomeBannerItem';

export interface HomeBannerProps {
  items: HomeBannerItemProps[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ items }) => {
  const [indexActive, setIndexActive] = useState<number>(0);
  const settingsRef = useRef({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayTimeout: 1500,
    afterChange: (current: number) => {
      setIndexActive(current);
    },
  });
  return (
    <div>
      <Slider
        {...settingsRef.current}
      >
        {items.map((item, itemIdx) => <div key={`${itemIdx.toString()}`} className="relative">
          <HomeBannerItem {...item} activated={indexActive === itemIdx} />
        </div>)}
      </Slider>
    </div>
  );
};

HomeBanner.defaultProps = {
};

export default HomeBanner;
