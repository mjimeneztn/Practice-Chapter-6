//const pet = {
//   name:"Patitas",
//    species:"dog",
//    nicknames: ["girl","baby","cutie"],
//    age: 4
//}

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getAllOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"

}

const cheeseComboMeal = {
    sandwichType: "grilled cheese",
    fries: true,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseComboMeal)
console.log(restaurant.orders)

// Invoke the function to return the list of all orders
let orders = restaurant.getAllOrders()
// Output all orders to the console using console.table()
console.table(orders)




//Your job is to define the different objects and arrays, their structure, and the corresponding
//roperties for each, to represent the following information about Elizabeth's campaign.

const campaign = {
    name: "Elizabeth Sanger",
    congressionalDistrict: "",
    bio: "life is a beach ",
    missionStatement: "",
    imageGallery: ["head shot", "picture of family", "picture of constituents"],
    platformStatement: { taxes: "", jobs: "", infrastructure: "", healthcare: "", crimeAndEnforcement: ""},
    eventsCalendar: [ {event: "Meet and greet",date: "07/17/2019"},{event: "Debate",date: "10/20/2019",}
]}
const url = [
    {
        urlName: "Donation Form",
        link: "",
    },
    {
        urlName: "Voter Registration",
        link: "",
    }
]

const volunteerInfo = [
    {
        name: "michelle jimenez",
        address: "500 interstate blvd",
        email: "honkytonk@nashville.com",
        number: "555-234-4343",
        availibilty: "part-time",
        activity: "take polls",
    },
    {
        name: "bobby bob",
        address: "123 imaginary st",
        email: "k3wl@gmail.com",
        number: "555-323-4534",
        availibilty: "full-time",
        activity: "phone calls",
    },
]

function addToImageGallery(newImage) {
    campaign.imageGallery.push(newImage)
}

addToImageGallery("selfie")
console.log(campaign.imageGallery)

function changeBiography(newBiography) {
    campaign.bio= newBiography
}

changeBiography("new bio")
console.log(campaign.bio)

function changePlatform(topic, newPlatformStatement) {

}
