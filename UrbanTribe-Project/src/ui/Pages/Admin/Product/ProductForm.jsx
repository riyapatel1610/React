import { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Select from "react-select";
let initalState = {
  title: "",
  description: "",
  brand: "",
  gender: "", // [male,female,kids]
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
  mainCategorie: "",
};

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
const mainCategoryOptions = [
  { value: "casual", label: "casual" },
  { value: "sports", label: "sports" },
  { value: "school", label: "school" },
  { value: "professional", label: "professional" },
  { value: "travel", label: "travel" },
  { value: "lunch", label: "lunch" },
  { value: "corporate", label: "corporate" },
];

export default function ProductForm({ modal, toggle }) {
  const [product, setProduct] = useState(initalState);
  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e.value);
      setProduct({ ...product, color });
    }
  };
  const checkHandler = (ee) => {
    if (product.size.includes(ee)) {
      let filter = product?.size((e) => e !== ee);
      setProduct({ ...product, size: filter });
    } else {
      setProduct({ ...product, size: [...product.size, ee] });
    }
  };
  const handleSubmit = () => {
    // e.preventDefault(); 
    console.log(product); 
   
    setProduct(initalState);
    // setOpenModal(true);

  };
 
  return (
    <>
      <div className="flex justify-end mr-8">
        <Button
          className="focus:ring-0 mx-2 my-2 rounded-md border !border-red-600  bg-white text-red-600 hover:text-white hover:!bg-red-600 "
          onClick={() => toggle()}
        >
          Add Product
        </Button>
      </div>
      <Modal dismissible show={modal} size="xl" onClose={toggle}>
        <Modal.Header>Product Form</Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <Label htmlFor="titel" value="Title" />
              <TextInput
                id="titel"
                placeholder="Enter a title"
                value={product?.title}
                onChange={(e) => setProduct({ ...product, title: e?.target?.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="text" value="Description" />
              <TextInput
                id="text"
                placeholder="Enter a discription"
                type="text"
                value={product?.description}
                onChange={(e) => setProduct({ ...product, description: e?.target?.value })}
                required
              />
            </div>
            <div>
              
                <Label htmlFor="TextInput" value="Size" />
                <div className="grid grid-cols-8">
                  <div className=" flex items-center gap-2 ">
                    {["S", "M", "L", "Xl"]?.map?.((size, index) => (
                      <div key={index}>
                        <input
                          id={`checkBox${size}`}
                          type="checkbox"
                          checked={product.size.includes(size)}
                          onChange={() => checkHandler(size)}
                          className="me-2 focus:ring-0 flex items-center gap-2"
                        />
                        <Label htmlFor={`checkBox${size}`}>{size}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              
            </div>
            <div>
              <Label htmlFor="text" value="Color" />
              <Select
                options={colorOptions}
                placeholder="Select colors"
                isMulti
                value={product.color?.map((color) => {
                  return { value: color, label: color };
                })}
                onChange={(e) => selectHandler(e, "color")}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Main Category" />
              <Select
                options={mainCategoryOptions}
                placeholder="Select chatagory"
                value={product.category?.map((ele) => {
                  return { value: ele, label: ele };
                })}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e.map((ele) => ele.value),
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="text" value="Price" />
              <TextInput
                id="text"
                type="number"
                placeholder="Enter a price"
                required
                value={product?.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e?.target?.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="text" value="Image" />
              <TextInput
                id="text"
                type="text"
                required
                placeholder="Enter a imageURL"
                value={product.thumbnail}
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="text" value="Stock" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a available stock"
                value={product?.availableStock}
                onChange={(e) =>
                  setProduct({ ...product, availableStock: e?.target?.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="text" value="Discount" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a discount"
                value={product?.discountPercentage}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPercentage: e?.target?.value,
                  })
                }
              />
            </div>
            <Button
              className="focus:ring-0 w-[100%] rounded-md border !border-red-600 bg-white text-red-600 hover:text-white hover:!bg-red-600 "
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
