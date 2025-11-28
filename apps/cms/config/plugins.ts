export default {
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 25,
      maxLimit: 100,
      apolloServer: {
        introspection: true,
      },
    },
  },
};
