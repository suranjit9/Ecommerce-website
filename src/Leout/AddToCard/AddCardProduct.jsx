import Swal from "sweetalert2";


const AddCardProduct = ({ product }) => {
    const {_id, name, price, Supplier, rating, type, photo, description } = product;
    const handelDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/addToCard/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });}
    return (
        <div>
            <div className="flex flex-col w-5/6 mx-auto border-opacity-50">
                <div className="grid grid-cols-5 h-20 card bg-base-300 rounded-box place-items-center">
                    {/* <div className="grid grid-cols-8"> */}
                    <div className="grid col-span-1 border-2">
                        <img className="w-16 h-16" src={photo} alt="photo" />

                    </div>
                    <div className="grid col-span-2 border-2 text-left">
                        <div className="flex">
                            <div>
                                <h3>{name}</h3>
                                <h4>{type}</h4>
                                <h4>{price}</h4>
                            </div>
                            <div className="pl-3 pt-[3%]">
                                
                            </div>
                        </div>

                    </div>
                    <div className="grid col-span-1 border-2">
                    <div className="pl-3 pt-[3%]">
                                <button onClick={()=>handelDelete(_id)}><h3 className="text-xl text-red-500">Remove</h3></button>
                            </div>
                    </div>
                    <div className="grid col-span-1 border-2">
                    <div className="">
                                <button><h3 className="text-xl text-green-500">Chack Out</h3></button>
                            </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="divider mt-0 mb-1"></div>

            </div>
        </div>
    );
};

export default AddCardProduct;