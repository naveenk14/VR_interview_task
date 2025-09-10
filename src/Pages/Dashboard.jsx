import Layout from "../components/Layout/Layout";
import StatsCard from "../components/Dashboard/StatsCard";
import { CustomerIcon, Glass, Glass1, Profile, RevenuesIcon, ShopsIcon, User1, User2 } from "../Assets";
import RecentOrders from "../components/Dashboard/RecentOrders";
import { Link } from "react-router";
import TopSelling from "../components/Dashboard/TopSelling";
import SalesChart from "../Components/Dashboard/SalesChart";

const Dashboard = () => {
  //stats mock data

  const stats = [
    {
      title: "Revenues",
      value: "$ 3,503.26",
      change: "+6.5%",
      positive: true,
      icon: RevenuesIcon,
    },
    {
      title: "Customers",
      value: "34",
      change: "-2.8%",
      positive: false,
      icon: CustomerIcon,
    },
    {
      title: "Shop Views",
      value: "683",
      change: "+1.7%",
      positive: true,
      icon: ShopsIcon,
    },
  ];

  //order mockk data

  const orderHeaders = [
    { key: "name", label: "From" },
    { key: "price", label: "Price" },
    { key: "status", label: "Status" },
  ];

  const orders = [
    {
      name: "Maxima Smalls",
      price: "$ 35.22",
      status: "in progress",
      time: "5 minutes ago",
      profile: User1
    },
    {
      name: "Andrew Robocop",
      price: "$ 23.76",
      status: "on the way",
      time: "30 minutes ago",
      profile: User2
    },
    {
      name: "Smalls",
      price: "$ 35.22",
      status: "delivered",
      time: "1 day ago",
      profile: User1
    },
    {
      name: "Lau Baker",
      price: "$ 23.76",
      status: "cancelled",
      time: "2 days ago",
      profile: User2
    },
  ];

  //topselling mock data

  const productHeaders = [
    { key: "name", label: "Product" },
    { key: "price", label: "Price" },
    { key: "quantity", label: "Quantity" },
    { key: "amount", label: "Amount" },
    { key: "sales", label: "Sales" },
  ];

  const products = [
    {
      name: "Black Sunglasses",
      price: "$39",
      quantity: 500,
      amount: "$27,500",
      sales: "55%",
      icon: Glass,
    },
    {
      name: "Tshirt",
      price: "$32",
      quantity: 1000,
      amount: "$27,500",
      sales: "75%",
      icon: Glass1,
    },
    {
      name: "Arrow pants",
      price: "$45",
      quantity: 200,
      amount: "$27,500",
      sales: "87%",
      icon: Glass,
    },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center my-4">
        <p className="text-primary-dark font-[800] text-2xl">Dashboards</p>
        <div className="flex items-center justify-between gap-5">
          <Link to="/" className="text-primary-light text-[12px]">
            Analytics
          </Link>
          <Link to="/" className="text-blue-500 text-[12px] border-b">
            E-Commerce
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {stats.map((item, i) => (
          <StatsCard key={i} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <RecentOrders orders={orders} orderHeaders={orderHeaders} />
        <SalesChart />
      </div>

      <TopSelling products={products} productHeaders={productHeaders} />
    </Layout>
  );
};

export default Dashboard;
