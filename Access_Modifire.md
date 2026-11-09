Access Modifiers in TypeScript OOP:
Access modifiers control where class properties and methods can be accessed or modified.
 public:
if we use public modifire we can access property or method from any where. we can edit . 

private:
if we use privet modifire we can access class's property or methond only inside the same class.wecan not access it outside the class.

protected:
by using this modifre we can access property or method of a class inside the same class and its child classes.
we cannot access directry outside the class

readonly:
if we use readonly we cannot change the value of it that is  assind when it is  declared or initializes=d in the costractor.


example:
class User {
  public name: string
  private password: string
  protected role: string
  readonly id: number

  constructor(
    name: string,
    password: string,
    role: string,
    id: number
  ) {
    this.name = name;
    this.password = password
    this.role = role;
    this.id = id;
  }

  public showPassword() {
    console.log(this.password)
  }
}

const user = new User(
  "Moez",
  "123456",
  "Developer",
  1
);

console.log(user.name); // ✅ public

// console.log(user.password); // private
// console.log(user.role);     //protected

console.log(user.id); // ✅ readonly can be read

// user.id = 2; Cannot modify readonly property