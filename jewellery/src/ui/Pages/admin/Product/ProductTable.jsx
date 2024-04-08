import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FormGroup, Input, Label, Table } from "reactstrap";
import { EyeIcon, PenBox, Trash } from "lucide-react";
import { toast } from "react-toastify";

let sizeOptions = ["41", "42", "43", "44", "45"];

export default function ProductTable({
  refresh,
  refresHandler,
  setProduct,
  toggle,
  UpdateHandler,
  Preview,
}) {
  let [data, setData] = useState(null);
  let [paginate, setPaginate] = useState({
    limit: 10,
    page: 1,
    totalProduct: 0,
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        limit: paginate.limit,
        page: paginate.page,
      },
    }).then((res) => {
      setData(res.data.data);
      setPaginate({ ...paginate, totalProduct: res.data.count });
    });
  }, [refresh, paginate.page, paginate.limit]);

  const updateHandler = (product) => {
    toggle();
    setProduct(product);
    UpdateHandler();
  };

  const deleteHandler = (product) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${product?._id}`,
      data: data,
    })
      .then((res) => {
        toast.success("Deleted successfully");
        if (data.length === 1) {
          setPaginate({ ...paginate, page: paginate.page - 1 });
        }
        refresHandler();
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  const handlePageClick = (e) => {
    setPaginate({ ...paginate, page: e.selected + 1 });
  };

  const serialNumber = (i) => {
    return (paginate.page - 1) * paginate.limit + i + 1;
  };
  const handleSelectChange = (selectedLimit) => {
    const limit = parseInt(selectedLimit);
    const newData = data.filter((index) => index < limit);
    setData(newData);
    setPaginate({ ...paginate, limit, page: 1 });
  };
  

  return (
    <div>
      <FormGroup style={{ display: "flex", justifyContent: "end" }}>
        <Label for="exampleSelect">Select</Label>
        <Input
          id="userType"
          name="userType"
          type="select"
          style={{ width: "40px" }}
          onChange={(e)=>handleSelectChange(e.target.value)    

          }
        >
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </Input>
      </FormGroup>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COLOR</th>
            <th>SIZE</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((product, i) => {
            return (
              <tr key={product._id}>
                <td>{serialNumber(i)}</td>
                <td>
                  <img
                    style={{ height: "30px" }}
                    src={product.thumbnail}
                    alt="Product Thumbnail"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <div className="d-flex gap-2">
                    {product?.color.map((color, i) => (
                      <div
                        key={i}
                        style={{
                          height: "15px",
                          width: "15px",
                          border: "1px solid black",
                          borderRadius: "50%",
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {sizeOptions.map((size, i) => (
                      <div
                        key={i}
                        style={
                          product.size.includes(size)
                            ? { backgroundColor: "black", color: "white",borderRadius:"35% " }
                            : { backgroundColor: "gray", color: "white",borderRadius:"35% " }
                        }
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <PenBox onClick={() => updateHandler(product)} />
                </td>
                <td>
                  <Trash onClick={() => deleteHandler(product)} />
                </td>
                <td>
                  <EyeIcon onClick={() => Preview(product)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ReactPaginate
        containerClassName="pagination"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(paginate.totalProduct / paginate.limit)}
        previousLabel="Previous"
        marginPagesDisplayed={1}
        activeClassName="active"
      />
    </div>
  );
}
