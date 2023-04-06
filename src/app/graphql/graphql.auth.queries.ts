import {gql} from 'apollo-angular'

const AUTHENTICATE = gql`
  mutation authenticate($credential: Credential!){
      authenticate(credential: $credential){
          type
          value
      }
  }
`
const REFRESH = gql`
  query accesstoken($token: String!){
    accessToken(tokenString: $token) {
        type
        value
    }
  }
`

const CREATE_CREDENTIALS = gql`
  mutation createAccount($credential: Credential!){
      createAccount(credential: $credential){
          type
          value
      }
  }
  `

export {AUTHENTICATE, REFRESH, CREATE_CREDENTIALS}