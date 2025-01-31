const DynamicIconButton = ({
  icon: Icon,
  count,
}: {
  icon: any;
  count: number;
}) => {
  return (
    <div className="relative inline-block">
      {/* Icon Button */}
      <button className="text-2xl hover:text-white text-gray-400 transition">
        <Icon />
      </button>

      {/* Counter Badge */}
      {count > 0 && (
        <span className="absolute -top-2 -right-2   bg-red-500 text-white text-xs px-1  rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default DynamicIconButton;
