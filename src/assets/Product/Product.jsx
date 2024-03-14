import PropTypes from 'prop-types';

const Product = ({product}) => {
    const {name, image, description, price, unit } = product;
    return (
        <div className="flex flex-col justify-center items-center bg-slate-50 mx-1 my-1 rounded-lg">
            <img className="h-40 w-fit mt-16 mb-6" src={image} alt="" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className='px-4 text-center pb-3'>{description}</p>
            <p className='px-4 text-center text-sm'>Per {unit}</p>
            <p className='px-4 text-center pb-3 text-xl text-teal-800 font-semibold'>$ {price}</p>
            <button className='py-2 px-10 border-teal-600 border-2 rounded-md text-teal-600 font-medium hover:scale-105 hover:bg-teal-600 hover:text-white active:scale-100 mb-8'>Add to Cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
}

export default Product;