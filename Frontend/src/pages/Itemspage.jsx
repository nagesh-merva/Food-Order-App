
import DisplayGenre from "../components/DisplayGenre"
import { CartProvider } from "../contexts/CartContext"
import { OutletProvider } from "../contexts/OutletContext"

function ItemsPage() {

    return (
        <CartProvider>
            <OutletProvider >
                <DisplayGenre />
            </OutletProvider>
        </CartProvider>
    )
}

export default ItemsPage