import PropTypes from "prop-types";

const CarouselItem = ({ imageName }: { imageName: string }) => {
  return (
    <div>
      <img
        className="d-block w-100" // Adjust the classes based on your design
        src={`path/to/your/images/${imageName}`}
        alt={`slide ${imageName}`}
      />
    </div>
  );
};

CarouselItem.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default CarouselItem;
