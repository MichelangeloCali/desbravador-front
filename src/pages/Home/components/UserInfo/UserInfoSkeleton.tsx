import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const UserInfoSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4 md:w-96 w-72">
      <Skeleton
        circle={true}
        className="md:h-40 md:w-40 h-20 w-20"
        baseColor="#9e9e9e"
        highlightColor="#e0e0e0"
      />
      <div className="flex flex-col items-center">
        <Skeleton height={20} width={300} baseColor="#9e9e9e" highlightColor="#e0e0e0" />
      </div>
    </div>
  );
};
