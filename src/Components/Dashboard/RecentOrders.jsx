import DataTableCard from "../DataTableCard/DataTableCard";
import {StatusIcon } from "../../Assets";

const RecentOrders = ({ orders, orderHeaders }) => (
  <DataTableCard
    title="Recent Orders"
    headers={orderHeaders}
    rows={orders}
    renderRow={(item) => (
      <>
        <td className="py-3">
          <div className="flex items-center">
            <img
              src={item.profile}
              alt={item.name}
              className="w-10 h-10 rounded-full me-2"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-[16px]">{item.name}</p>
              <p className="text-[10px] text-primary-light">{item.time}</p>
            </div>
          </div>
        </td>
        <td className="text-primary-light font-[700] text-[14px]">
          {item.price}
        </td>
        <td>
          <span
            className={`flex items-center gap-1 max-w-fit px-2 py-1 rounded-full text-xs font-medium ${
              item.status === "delivered"
                ? "bg-green-100 text-success"
                : item.status === "in progress"
                ? "bg-warning text-yellow-600"
                : item.status === "on the way"
                ? "bg-green-100 text-info"
                : "bg-red-100 text-cancelled"
            }`}
          >
            <img src={StatusIcon} alt={item.status} className="w-4 h-4" />
            <span className="capitalize">{item.status}</span>
          </span>
        </td>
      </>
    )}
  />
);

export default RecentOrders;
