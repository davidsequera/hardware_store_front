// interface Query {
//     getUsers: User[];
//     getAllUsers: User[];
//     getById(id: string): User;
//     getByEmail(email: string): User;
//}
  
// interface Mutation {
//     createUser(input: CreateUserInput): User;
//     updateUser(input: UpdateUserInput): User;
//     deleteUser(id: string): User;
//}



interface User {
    id?: string;
    name?: string;
    last_name?: string;
    username?: string;
    birthday?: string;
    city_birth?: string;
    credentials?: string[];
}
  
  
interface CreateUserInput {
    name: string;
    last_name: string;
    username: string;
    birthday: string;
    city_birth: string;
}
  
interface UpdateUserInput {
    id: string;
    name?: string;
    username?: string;
    last_name?: string;
    birthday?: string;
    city_birth?: string;
}
  