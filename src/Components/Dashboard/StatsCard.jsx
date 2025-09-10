const StatsCard = ({ title, value, change, positive, icon }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="flex items-center justify-between">
        <h4 className="text-primary-light font-[400] text-sm tracking-wide uppercase mb-5">
          {title}
        </h4>
        <img src={icon} alt={title} />
      </div>
      <h2 className="text-primary-dark text-xl font-bold">{value}</h2>
      <div className={positive ? "text-green-500" : "text-red-500"}>
        {change}
        <span className="ms-1 text-[#586A84] font-[400] text-[12px]">
          since last month
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
