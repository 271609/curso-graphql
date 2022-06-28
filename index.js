const { ApolloServer, gql } = require('apollo-server')

const typeDefs = `
#Pontos de entrada da sua Api!
  type Query {
    ola: String
    horaatual: String
      }  
`
const resolvers = {
    Query: {
        ola() {
            return 'Bom dia'
        }
        
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log('Executando em ${url}');
})
