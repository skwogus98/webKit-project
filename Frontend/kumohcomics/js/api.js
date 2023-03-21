import axios from "axios";

async function getUser() {
    try {
        const response = await axios.get("/user?ID=12345");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function post() {
    try {
        const response = await axios.post("/user", {
            firstName: "Fred",
            lastName: "Flintstone",
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


export function testfnc(){
    console.log("hi")
}