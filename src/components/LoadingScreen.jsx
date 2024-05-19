import { useProgress } from "@react-three/drei"

export const LoadingScreen = ({started, onStarted})=>{
  const {progress}=useProgress();
  return( 
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div 
          className="loadingScreen__progress_value"
          style={{
            width: `${progress}%`,
          }}/>
      </div>
        <button className="loadingScreen__button"
          disabled={progress<100}
          onClick={onStarted}>
            Enter
          </button>
      </div>
    
  );

};