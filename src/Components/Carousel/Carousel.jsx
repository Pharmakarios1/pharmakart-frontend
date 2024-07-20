const Carousel = ({ children: slides }) => {
  return (
    <div className="overflow-hidden flex justify-center">
      <div className="">{slides}</div>
    </div>
  );
};

export default Carousel;
