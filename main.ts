// SOURCE: https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript

function classDecorator(target: Function) {
  Object.seal(target)
  Object.seal(target.prototype)

  console.log(`Decorating class ${target}`)
}

const propertyDecorator = (target: any, memberName: string) => {
  console.log(`Decorating property ${memberName}`)
}

const accessorDecorator = (
  target: any,
  memberName: string,
  propertyDescriptor: PropertyDescriptor
) => {
  console.log(
    `Decorating accessor ${memberName} with descriptor ${JSON.stringify(
      propertyDescriptor
    )}`
  )
}

const methodDecorator = (
  target: any,
  memberName: string,
  propertyDescriptor: PropertyDescriptor
) => {
  console.log(
    `Decorating method ${memberName} with descriptor ${JSON.stringify(
      propertyDescriptor
    )}`
  )
}

function parameterDecorator(
  target: Object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Decorating parameter ${parameterIndex} from ${propertyKey}`)
}

@classDecorator
class Person {
  @propertyDecorator
  firstName: string = 'Jon'

  @propertyDecorator
  lastName: string = 'Doe'

  @accessorDecorator
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @methodDecorator
  printName(@parameterDecorator prefix: string) {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

const person = new Person()
