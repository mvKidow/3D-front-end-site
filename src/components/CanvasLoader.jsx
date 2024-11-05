import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <span className="canvas-loader"></span>
        <p className="text-white mt-4">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;