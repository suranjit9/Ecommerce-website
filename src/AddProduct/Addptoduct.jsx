import Swal from 'sweetalert2'

const AddProduct = () => {
    const handalAddProduct = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const price = from.price.value;
        const Supplier = from.supplier.value;
        const rating = from.rating.value;
        const photo = from.photo.value;
        const type = from.type.value;
        const description = from.description.value;
        
        const fromData = { name, price, Supplier, rating, type, photo, description };
        console.log(fromData);
        fetch('http://localhost:5000/AddProduct',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(fromData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add a product Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }
    
    return (
        <div className=" p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <form onSubmit={handalAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Product Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                <div className="form-control md:md:w-1/2  ">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">What Type of Product</span>
                        </label>
                        <select type="text" name="type" className="select select-bordered  ">
                        <option disabled selected >Please Select One</option>
                        <option>Technology and Electronics</option>
                        <option>Toy</option>
                        <option>Man Clothing</option>
                        <option>Woman Clothing</option>
                    </select>
                    </div>
                </div>
               
                {/* form Photo url row */}
                
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            
                            <textarea type="text" name="description" className="textarea textarea-primary w-full" placeholder="Short description"></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddProduct;