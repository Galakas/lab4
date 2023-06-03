import "./App.css";
import CardWrapper from "./components/CardWrapper";
import {useState, useEffect, useRef} from "react";
import {Portal} from "./components/Portal";
import MySelect from "./components/MySelect";


export default function App() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('');
    const buttonBasket = useRef('');


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const focusButton = (event) => {
        buttonBasket.current.focus();
    }

    const sortProducts = (sort) => {
        setSelectedSort(sort)
        if (sort === 'rating')
            setProducts([...products].sort((a, b) => b[sort].rate - a[sort].rate))
        else
            setProducts([...products].sort((a, b) => b[sort] - a[sort]))
    }


    return (
        <div className="App">
            <h1>Товари</h1>
            <MySelect value={selectedSort} onChange={sortProducts} defaultValue='Sort' options={[
                    {value: 'rating', name: 'За рейтингом'},
                    {value: 'price', name: 'За ціною'},
                ]}
            />
            {
                <CardWrapper products={products} focusButton={focusButton} open={open} setOpen={setOpen}></CardWrapper>
            }
        </div>
    );
}
