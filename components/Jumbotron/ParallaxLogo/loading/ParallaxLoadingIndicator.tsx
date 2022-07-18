import { Loader } from "@react-three/drei";

const ParallaxLoadingIndicator: React.FC = () => {
  return (
    <Loader
      dataInterpolation={(p) => `${(100 - p).toFixed(0)} days until camp`}
      containerStyles={{
        background: "#CFEAED",
      }}
    />
  );
};

export default ParallaxLoadingIndicator;
