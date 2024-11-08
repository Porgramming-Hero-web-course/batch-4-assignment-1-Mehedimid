# Union and Intersection Types in TypeScript

There is a huge role of **Union** and **Intersection** types in TypeScript. Let’s understand how we can use these types and their importance.

---

## Union Type (`|`)

we can assume Union type as like “or” in mathematics. When we want , If any of the conditions can fulfill our requirements, we will use union type  and its simple is “|”  . we can use this type in any type or interface.

## Code Example:
```typescript
type User = string | number ;
const user : User = “Ashraf”
const user : User  = 1
```
Here , we can assign numbers or strings by using union type. Both will be correct. 


## Intersection type (`&`)

It is like “and” in mathematics. When both conditions fulfill our requirements, we will use intersection type “&”. We can also use this type in any type or interface.

---

## Code Example:

```typescript
type UserName = { name: string };
type UserAge = { age: number };
type User = UserName & UserAge;

const user: User = {
    name: "Ashraf",
    age: 30
}; 
```
 This code is correct because this user variable contains both types correctly.

```typescript
const invalidUser: User = {
    name: "Ashraf",
    age: "thirty"
}; 
```
This code is incorrect because `age` is a string, which is not fulfilling both types of conditions.