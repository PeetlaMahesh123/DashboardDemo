import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import RecentOrders from "../components/RecentOrders";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="stats">
          <StatCard title="Total Sales" value="$25,430" />
          <StatCard title="Revenue" value="$12,300" />
          <StatCard title="Orders" value="1,245" />
          <StatCard title="Customers" value="860" />
        </div>

        <div className="charts">
          <SalesChart />
        </div>

        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;