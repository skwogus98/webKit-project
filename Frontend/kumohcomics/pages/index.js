import Carousel from "./../components/Carousel";
import BookTable from './../components/BookTable';
import Navigation from './../components/Navigation';

import {testfnc} from "../js/API"
import Search from './../components/Search';


function index() {
    var carousels = [{ img: 1 }, { img: 2 }, { img: 3 }, { img: 4 }, { img: 5 }, { img: 6 }, { img: 7 }, { img: 8 }, { img: 9 }, { img: 10 }];
    var books = [{title:"title", category:"cat", price:"10000"},{title:"title", category:"cat", price:"10000"},{title:"title", category:"cat", price:"10000"},{title:"title", category:"cat", price:"10000"},]
    testfnc()
    return (
        <div>
            <p>추천 도서</p>
            <Carousel carousels={carousels} />
            <Navigation/>
            <Search/>
            <BookTable books={books}/>
        </div>
    );
}

export default index;
