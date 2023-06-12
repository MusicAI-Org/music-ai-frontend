// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv {
    NEXT_PUBLIC_AUTH0_DOMAIN: string;
    NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    NEXT_PUBLIC_AUTH0_CLIENT_SECRET: string;
    NEXT_PUBLIC_AUTH0_AUDIENCE: string;
    NEXT_PUBLIC_STABLE_DIFFUSION_API: string;
    NEXT_PUBLIC_OPENAI_KEY: string;
    NEXT_PUBLIC_LOCAL_BACKEND_URL: string;
    NEXT_PUBLIC_BACKEND_URL: string;
  }
}
