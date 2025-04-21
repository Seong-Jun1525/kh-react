import React from 'react'
import ProductItem from './components/ProductItem';

// Props Drilling
// => 부모가 가지고 있는 데이터를 자식에게 전달하여 자식이 사용할 수 있도록 하는 것
const App = () => {
    const productList = [
        {id: 1, name: "텀블러", price: 9000, isSale: false},
        {id: 2, name: "키보드", price: 19000, isSale: true},
        {id: 3, name: "컴퓨터", price: 119000, isSale: false}
    ]
    return (
        <div>
            <h1>상품 목록</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
                {
                    productList?.map((item, idx) => {
                        console.log(idx);
                        return (
                            // map을 사용할 경우 key값을 꼭 작성해주자
                            <ProductItem key={item.id} item={item} idx={idx} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;