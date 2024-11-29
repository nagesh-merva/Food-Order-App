import NavBar from "../components/NavBar"
import ItemsChoice from "../components/ItemsChoice"
import Offers from "../components/Offers"
import Footer from "../components/footer"
import SortedMenu from "../components/SortMenu"
import Cart from "../components/cart"
import { CartProvider } from "../contexts/CartContext"
import { OutletProvider } from "../contexts/OutletContext"

function Home() {
    return (
        <CartProvider>
            <div className=" h-full w-screen bg-slate-50 overflow-x-hidden">
                <OutletProvider >
                    <NavBar />
                    <ItemsChoice />
                    <Offers />
                    <SortedMenu />
                    <Footer />
                    <Cart />
                </OutletProvider>
            </div>
        </CartProvider>
    )
}

export default Home