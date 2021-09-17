

const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

        const { phone, email } = person;
        const { large: image } = person.picture;
        const { password } = person.login;
        const { first, last } = person.name;
        const {
          dob: { age },
        } = person;
        const {
          street: { number, name },
        } = person.location;

        const newPerson = {
          image,
          phone,
          email,
          password,
          age,
          street: `${number} ${name}`,
          name: `${first} ${last}`,
        };
