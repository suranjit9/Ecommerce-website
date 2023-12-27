

const AddCardProduct = ({ product }) => {
    const { name, price, Supplier, rating, type, photo, description } = product;
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
                                <button><h3 className="text-xl text-red-500">Remove</h3></button>
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