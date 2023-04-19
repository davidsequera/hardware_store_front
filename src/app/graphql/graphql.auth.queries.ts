import {gql} from 'apollo-angular'

/**
 * Consulta GraphQL que se utiliza para autenticar a un usuario
 */
const AUTHENTICATE = gql`
  mutation authenticate($credential: Credential!){
    authenticate(credential: $credential){
      accessToken{
        type
        value
      }
      refreshToken{
        type
        value
      }
    }
  }
`

/**
 * Consulta GraphQL que se utiliza para obtener un nuevo token de acceso
 */
const REFRESH = gql`
  query accesstoken($token: String!){
    accessToken(tokenString: $token) {
      type
      value
    }
  }
`

/**
 * Consulta GraphQL que se utiliza para crear una cuenta de usuario
 */
const CREATE_CREDENTIALS = gql`
  mutation createAccount($credential: Credential!){
    createAccount(credential: $credential){
      accessToken{
        type
        value
      }
      refreshToken{
        type
        value
      }
    }
  }
`

export {AUTHENTICATE, REFRESH, CREATE_CREDENTIALS}
