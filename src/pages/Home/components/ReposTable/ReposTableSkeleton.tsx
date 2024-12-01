import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ReposTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      <div className="flex gap-4">
        <Skeleton width={100} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
        <Skeleton width={150} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
        <Skeleton width={80} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
        <Skeleton width={80} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <Skeleton
            width={100}
            height={20}
            baseColor="#9e9e9e"
            highlightColor="#e0e0e0"
          />
          <Skeleton
            width={150}
            height={20}
            baseColor="#9e9e9e"
            highlightColor="#e0e0e0"
          />
          <Skeleton width={80} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
          <Skeleton width={80} height={20} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
        </div>
      ))}
    </div>
  );
};
