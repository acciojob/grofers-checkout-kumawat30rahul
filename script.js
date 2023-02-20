const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let prices = document.querySelectorAll('.price')
console.log(prices);
let arr = []
prices.forEach(element => {
    arr.push(element.innerText)
})
console.log(arr);
let amount = arr.reduce((sum,element) => {
    return sum + Number(element)
},0)
console.log(amount);
document.getElementById('ans').innerText = amount
  
};

getSumBtn.addEventListener("click", getSum);

