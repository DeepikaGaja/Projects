import Tabbutton from "./Tabbutton";

//Page shows entire product list

const ProductList = () => {
    return (
        <div className="md:mt-10 mt-2 bg-white flex flex-col justify-center items-center">
            <h2 className="font-medium font-Poppins text-3xl mb-5">Catergories</h2>
            <div className="flex flex-wrap gap-4 px-6 py-3 w-fit rounded-md">
                <Tabbutton to='/books/science'>Silk Sarees</Tabbutton>
                <Tabbutton to='/books/fiction'>Designer Sarees</Tabbutton>
                <Tabbutton to='/books/non_fiction'>Kurtis</Tabbutton>
                <Tabbutton to='/books/fantacy'>Jeans</Tabbutton>
                <Tabbutton to='/books/crime'>Salwar Materials</Tabbutton>
            </div>
        </div>)
}
export default ProductList;