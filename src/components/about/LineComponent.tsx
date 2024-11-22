// Divider.js

const Divider = ({
  color = "#ccc",
  gradient = null,
  thickness = "1px",
  width = "100%",
  margin = "1rem 0",
  className = "",
}) => {
  return (
    <hr
      style={{
        backgroundColor: gradient ? `linear-gradient(${gradient})` : color,
        height: thickness,
        width: width,
        margin: margin,
        border: "none",
      }}
      className={className}
    />
  );
};

export default Divider;
