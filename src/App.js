import React, {Component} from "react";
import style from './style.css'



// function primeArray(arrayLeng) {

//   let mas= []

//     nextPrime:
//     for (let i = 2; i <= 100; i++) { 
    
//       for (let j = 2; j < i; j++) { 
//         if (i % j == 0) continue nextPrime; 
//       }
//         mas.push(i)     
//       if (mas.length == arrayLeng) {
//         break;
//       }
//     }

//     for (let index = 0; index < arrayLeng; index++) { 
//     console.log(mas[index])     
//     }

// }

// function searchNumber(a) {
// let n = a.split(' ')
// let arr = []
// let arr2 = []
// for (let index = 0; index < n.length; index++) {
//   arr.push(Number(n[index]))
// }

// for (let index = 0; index < arr.length; index++) {
//    if(arr[index] > 0)
//    arr2.push(arr[index])
// }
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr2[index])
// }

// }

function zamena(a) {

  let arr = []
    
  let kyf = 0

//   for (let j = 0; j < 8; j++) {
//   kyf = 0
//   for (let i = 0; i < 8; i++) {
//     if ( a[j] == a[i]) { 
//       kyf +=1  
//     }
//     else {
//     }    
//   }
//   console.log(a[j] + " " + kyf) 
// }

//   for (let index = 0; index < arr.length; index++) {

//       console.log(arr[index] +" fg")
      
//   }


}

class App extends Component {


    render() {
      return (
        <div className="blok">

         {/* <div className="btn">
        <input type="search" placeholder="Filter orders" id="search"/>
           <button id="Filter">Filter</button>
           <button id="Columns">Columns</button>
           <button id="Sort">Sort</button>
           <button id="tochka">&sdot;&sdot;&sdot;</button>
           </div>  */}
        {/* <div className="bl blh">  
        <input type = "checkbox" /> <div>Order</div><div>Date</div><div>Customer</div><div>Total</div><div>Payment status</div><div>Fulfillment status</div><div>Items</div><div>Delivery method</div><div>Tags</div></div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1058</div><div >Thursday at 02:38 pm</div><div>No customer</div><div>0.00</div><div ><span id="Paid"> <span  id="dotPaid">&bull;</span>Paid</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>1 Items</div><div></div><div></div>
        </div>   */}
        {/* <div className="bl">  
        <input type = "checkbox" /> <div >#1057</div><div >Thursday at 02:37 pm</div><div>No customer</div><div> 0.00</div><div > <span id="Paid"> <span  id="dotPaid">&bull;</span>Paid</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>1 Items</div><div></div><div></div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1056</div><div >Thursday at 02:35 pm</div><div>No customer</div><div>0.00</div><div> <span id="Paid"> <span  id="dotPaid">&bull;</span>Paid</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>1 Items</div><div></div><div></div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1055</div><div >Thursday at 02:33 pm</div><div>No customer</div><div>0.00</div><div> <span id="Paid"> <span id="dotPaid">&bull;</span>Paid</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>1 Items</div><div></div><div></div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1054</div><div >Thursday at 02:30 pm</div><div>No customer</div><div>0.00</div><div> <span id="Paid"> <span  id="dotPaid">&bull;</span>Paid</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>1 Items</div><div></div><div></div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1053</div><div >Wednesday at 11:37 am</div><div>No customer</div><div>11,111.00</div><div> <span id="Paid2"> <b>&#186;</b> Payment panding</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>2 Items</div><div></div><div>333</div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1052</div><div >Wednesday at 11:35 am</div><div>No customer</div><div>11,111.00</div><div><span id="Paid2"><b>&#186;</b>Payment panding</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>2 Items</div><div></div><div></div>
        </div>  
        <div className="bl">  
        <input type = "checkbox" /> <div >#1051</div><div >Wednesday at 11:34 am</div><div>No customer</div><div>11,111.00</div><div><span id="Paid2"><b>&#186;</b>Payment panding</span></div><div><span id="Paid2"><b>&#186;</b>Unfulfilled</span></div><div>2 Items</div><div></div><div></div>
        </div>   */}
      
        {/* {console.log(primeArray(10))}  */}
        {/* {console.log(searchNumber("У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе."))}  */}
        {console.log(zamena("assdssddffffrrreeeweggggg"))} 
        {/* {console.log(namberRandom(0, 100))}  */}

        

        </div>



      );
}  

}

export default App;
