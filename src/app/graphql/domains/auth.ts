enum TokenType {
    ACCESS = "ACCESS",
    REFRESH = "REFRESH",
    ID = "ID"
}
  
// interface Query {
//     accessToken(tokenString: string): Token | null;
// }

// interface Mutation {
//     authenticate(credential: Credential): TokenPair | null;
//     createAccount(credential: Credential): TokenPair | null;
// }

interface Token {
    type: TokenType;
    value: string;
}

interface CredentialType {
    id?: string;
    email: string;
    password: string;
}

interface TokenPair {
    accessToken: Token;
    refreshToken: Token;
}
  

export {TokenType, Token, CredentialType, TokenPair}