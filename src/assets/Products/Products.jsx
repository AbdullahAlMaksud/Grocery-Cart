import PropTypes from 'prop-types';
import Product from "../Product/Product";

const Products = ({ products }) => {
    console.log(products)

    return (
        <div className='w-11/12 mx-auto mt-20  bg-teal-900 my-1 rounded-lg pt-5 pb-6 px-6'>
            <h2 className='text-center text-5xl font-bold text-white py-10'>Grocery</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 ">
                {
                    products.map((product, idx) => <Product key={idx} product={product}></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.object
}

export default Products;