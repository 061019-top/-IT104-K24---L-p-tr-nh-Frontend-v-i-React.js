let userInfo = {
    name: "John",
    age: 25,
    location: {
        city: "HaNoi",
        country: "VietNam"
    },
    contact: {
        email: "John@example.com",
        phone: "0123456789"
    },
    job: {
        title: "Developer",
        company: "Teach Corp"
    }
};

function displayUserInfo(user) {
    const {
        name,
        age,
        location: { city, country },
        contact: { email = "unknown", phone = "unknown" } = {},
        job: { title = "unknown", company = "unknown" } = {}
    } = user;

    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as a ${title} at ${company}, and can be contacted via ${email} or ${phone}.`);
}

// Test cases
displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } });
displayUserInfo(userInfo);
