const loadAllphones = async () => {
   console.log("wow 3 second gone")
   document.getElementById("spinner").style.display="none"
//    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//    .then(res => res.json())
//    .then(data => console.log(data))

const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
const data = await response.json()
displayAllphone(data.data)

}

const displayAllphone =(phones) => {
  console.log(phones)
}



const handleSearch = () => {
document.getElementById("spinner").style.display="block"

    setTimeout(function (){
    loadAllphones()
    }, 3000)
} 

loadAllphones()