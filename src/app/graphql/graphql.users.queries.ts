import {gql} from 'apollo-angular'

const GET_ALL_USERS = gql`
  query {
    getAllUsers{
        id
        name
    }
  }
`
const UPDATE_USER = gql`
  mutation updateUser($userInput: updateUserInput){
      updateUser(input: $userInput){
          id
          name
          last_name
      }
  }
`


const GET_USER_BY_ID = gql`
  query aquery($userId: ID!){
      getById(id: $userId){
          id
          name
          last_name
          birthday
          city_birth
      }
  }
`

const CREATE_USER = gql`
  mutation createUser($userInput: createUserInput){
      createUser(input: $userInput){
          id
          name
          last_name
          birthday
          city_birth
      }
  }
`

const DELETE_USER = gql`
  mutation aquery($id: ID!){
    deleteUser(id: $id){
        id
        name
        last_name
    }
  }
`

export {GET_ALL_USERS, UPDATE_USER, GET_USER_BY_ID, CREATE_USER, DELETE_USER}