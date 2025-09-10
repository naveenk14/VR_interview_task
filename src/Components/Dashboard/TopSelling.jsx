import DataTableCard from "../DataTableCard/DataTableCard";

const TopSelling = ({ products, productHeaders }) => (
  <DataTableCard
    title="Top Selling"
    headers={productHeaders}
    sorting={true}
    rows={products}
    renderRow={(item) => (
      <>
        <td className="py-3 flex flex-col md:flex-row md:items-center gap-2">
          <img src={item.icon} alt={item.name} className="w-10 h-10 rounded" />
          <span className="font-[700] text-primary-dark">{item.name}</span>
        </td>
        <td className="py-3 text-primary-dark font-[400]">{item.price}</td>
        <td className="py-3 text-primary-dark font-[400]">{item.quantity}</td>
        <td className="py-3 text-primary-dark font-[400]">{item.amount}</td>
        <td className="py-3 text-primary-dark font-[400]">
          <div className="flex items-center gap-2">
            <div className="w-24 flex-1 bg-gray-200 h-2 rounded">
              <div
                className="bg-info h-2 rounded"
                style={{ width: `${item.sales}` }}
              />
            </div>
            <span className="text-xs font-medium">{item.sales}</span>
          </div>
        </td>
      </>
    )}
  />
);

export default TopSelling;
