export{}

const multiplyValue=(value:number, multiplier?:number)=>{
    if(multiplier==0){
        return value*multiplier;
    }else if(!multiplier){
        return value * 2
    }
    else{
        return value*multiplier
    }

}

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  else {
  return input ? "Active" : "Inactive";
  }
};


const formatCoordinate =([latitude, longitude, locationName]: readonly [number, number, string]) => {
    return `Latitude: ${latitude}, Longitude: ${longitude}, Location: ${locationName}`;
}

console.log(formatCoordinate([40.7128, -74.0060, "New York"]));


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = []
  arrays.forEach(array => {
    result.push(...array)
  })
  return result
};





interface Course {
  title: string
  students: number
  isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  )
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const result: T[K][] = []

  for (const item of items) {
    result.push(item[key])
  }

  return result
};





class Employee {
  protected name: string
  private baseSalary: number

  constructor(name: string, baseSalary: number) {
    this.name = name
    this.baseSalary = baseSalary
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee {
  private department: string

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary)
    this.department = department
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`
  }
}





const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted")
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  })
};

