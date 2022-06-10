class Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  hobbies: string[];

  constructor(
    firstname: string,
    lastname: string,
    birthDate: string,
    hobbies: string[] = []
  ) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.birthDate = new Date(birthDate);
    this.hobbies = hobbies;
  }

  addSkill = (_skill: string) => {
    this.hobbies.push(_skill);
  };

  getInformations = () => {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age:
        new Date(Date.now() - this.birthDate.getTime()).getUTCFullYear() - 1970,
      hobbies: this.hobbies,
    };
  };
}

const hobbies = [
  "Traveling",
  "Coding",
  "Camping",
  "Video Games",
  "Skateboarding",
];

const me = new Person("Amirhosein", "Farhoodi", "1997,5,11", hobbies);
export default me;
