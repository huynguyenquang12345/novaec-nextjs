---
to: components/<%= level %>/<%= h.toPascalCase(name) %>/index.tsx
---
import { ReactNode } from 'react';

export interface <%= h.toPascalCase(name) %>Props {
  children?: ReactNode;
}

const <%= h.toPascalCase(name) %>: React.FC<<%= h.toPascalCase(name) %>Props> = ({ children }) => (
  <div>{children}</div>
);

<%= h.toPascalCase(name) %>.defaultProps = {
};

export default <%= h.toPascalCase(name) %>;
