const CustomersTable = (customers) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.telephone}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        />
      </Pagination>
    </div>
  );
};

export default CustomersTable;
