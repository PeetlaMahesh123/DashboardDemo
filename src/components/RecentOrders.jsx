const RecentOrders = () => {
  const orders = [
    { id: 1, customer: "John", amount: "$120", status: "Delivered" },
    { id: 2, customer: "Alice", amount: "$250", status: "Pending" },
    { id: 3, customer: "Mark", amount: "$80", status: "Cancelled" },
  ];

  return (
    <div className="orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;