type ProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden my-[10px]">
      <div
        className="h-full bg-[#068484] rounded-full"
        style={{ width: `${value * 10}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

