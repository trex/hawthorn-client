import { gql } from 'apollo-boost';

// Queries
export const FUSIONAUTH_CONFIG = gql`
query {
  fusionAuthConfig{
      endpoint
      clientId
      tenantId
      redirectUri
  }
}
`;

export const LOGIN = gql`
query Login($code: String!) {
  login(code: $code) {
    imageUrl
  }
}
`;

export const LOGOUT = gql`
query {
  logout
}
`;

export const MODERATABLE_PROMPTS = gql`
  query{
    moderatablePrompts {
      id
      createdAt
      updatedAt
      title
    }
  }
`;

export const PUBLISHED_PROMPTS = gql`
  query {
    publishedPrompts {
      id
      title
      posts {
        id
        title      }
    }
  }
`;

// Mutations
export const CREATE_POST = gql`
mutation CreatePost($title: String!, $promptId: ID!) {
  createPost(title: $title, promptId: $promptId) {
    id
    title
    prompt {
      id
    }
  }
}
`;

export const CREATE_PROMPT = gql`
mutation CreatePrompt($title: String!) {
  createPrompt(title: $title) {
    id
    title
  }
}
`;
