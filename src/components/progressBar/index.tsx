const ProgressBar = (props: { completed: number; bgColor?: string }) => {
  const { completed, bgColor = "bg-purple-500" } = props;

  const containerStyles = {
    height: 20,
    borderRadius: 50,
  };

  const fillerStyles = {
    width: `${completed}%`,
    borderRadius: "inherit",
  };

  return (
    <div className="w-full bg-gray-100" style={containerStyles}>
      <div
        className={`flex items-center justify-end h-full ${bgColor}`}
        style={fillerStyles}
      >
        <span className="p-5 text-gray-100 font-bold">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
