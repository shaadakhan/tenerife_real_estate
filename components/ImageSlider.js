import { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
function ImageSlider({ photos }) {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <>
        <div className="slider_arrow">
          <BsFillArrowLeftCircleFill
            onClick={() => scrollPrev()}
            cursor="pointer"
          />
        </div>
      </>
    );
  };
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <>
        <div className="slider_arrow">
          <BsFillArrowRightCircleFill
            onClick={() => scrollNext()}
            cursor="pointer"
          />
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {photos.map((img, index) => (
          <div key={index} className="slider_image">
            <Image
              src={img.url}
              placeholder="blur"
              blurDataURL={img.url}
              alt="Property Image"
              width={1000}
              height={500}
            />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
}

export default ImageSlider;
