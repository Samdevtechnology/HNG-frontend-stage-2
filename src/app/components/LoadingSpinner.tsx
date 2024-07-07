const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary"></div>
      <p>Loading data...</p>
    </div>
  );
};

export default LoadingSpinner;
