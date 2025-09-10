import Chart from "../DataTableCard/Chart";

const SalesChart = () => (
  <div className="bg-white h-100 p-4 rounded-2xl shadow">
    <div className="flex justify-between items-center">
      <h3 className="mb-3 font-semibold">Sales</h3>
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center text-primary-light text-[13px]">
          <div className=" h-3 w-3 bg-[#9e13f3] rounded-full me-2"></div>
          Actual
        </div>
        <div className="flex items-center text-primary-light text-[13px]">
          <div className=" h-3 w-3 bg-gray-200 rounded-full me-2"></div>
          Projection
        </div>
      </div>
    </div>
    <div>
      <Chart />
    </div>
  </div>
);

export default SalesChart;
