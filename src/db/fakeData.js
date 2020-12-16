var faker = require('faker');

function generateFakeData() {
  var clients = [];
  var users = [];

  for (var i = 0; i < 10; i++) {
    var _id = faker.random.uuid();
    var lastname = faker.name.lastName();
    var firstname = faker.name.firstName();
    var phone = faker.phone.phoneNumber();
    var email = faker.internet.email();
    var address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      zip: faker.address.zipCode(),
      country: faker.address.country(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude()
    }
    var status = {
      id: faker.random.uuid(),
      label: 'Client mobee'
    }
    var createdAt = faker.date.past()
    var updatedAt = faker.date.recent()
    var password = faker.internet.password();


    clients.push({
      "_id": _id,
      "lastname": lastname,
      "firstname": firstname,
      "phone": phone,
      "email": email,
      "address": {
        "street": address.street,
        "city": address.city,
        "zip": address.zip,
        "country": address.country,
        "lat": address.lat,
        "lng": address.lng
      },
      "status": {
        "id": status.id,
        "label": status.label
      },
      "createdAt": createdAt,
      "updatedAt": updatedAt
    })

    users.push({
      "_id": _id,
      "email": email,
      "lastname": lastname,
      "firstname": firstname,
      "password": password,
      "createdAt": createdAt,
      "updatedAt": updatedAt
    })
   
  }
  return { "clients": clients, "users": users }
}

module.exports = generateFakeData