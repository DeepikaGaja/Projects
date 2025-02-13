import Categories from "../../Components/ProductList";
import Booksdata from "../../Components/ProductDetail";
import Footer from '../../Components/Footer';

//Home Page

const Home = () => {
    return (
        <div>
            <section id="hero_Section" className="flex md:flex-row flex-col md:justify-center justify-start items-start md:items-center w-full p-5 gap-10">
                    <img src="image1.jpg" alt="shopping image"  className="h-70"  />
            </section>
            <Categories />
            <Booksdata />
            <Footer />
        </div>
    )}
export default Home;