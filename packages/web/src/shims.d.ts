// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    unknown
  >;
  export default component;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    unknown
  >;
  export default component;
}

declare module 'incstr' {
  export const component = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    idGenerator: (opts: { alphabet: string; prefix: string }) => () => string,
  };
  export default component;
}
