import { useState, useEffect } from 'react';

const LiveAttackCounter = () => {
  const [attackCount, setAttackCount] = useState(1248);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAttackCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-700/50 p-3 rounded-lg">
      <div className="text-sm text-primary-300 mb-1">Live Attacks Blocked</div>
      <div className="text-xl font-bold text-white">{attackCount.toLocaleString()}</div>
      <div className="text-xs text-primary-300 mt-1">
        Updated every 3 seconds
      </div>
    </div>
  );
};

export default LiveAttackCounter;