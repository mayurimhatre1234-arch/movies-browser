import { ScrollContainer, ScrollItem } from "./styled";

export const HorizontalScroll = ({ children }) => (
  <ScrollContainer>
    {Array.isArray(children)
      ? children.map((child, index) => (
          <ScrollItem key={child?.key || index}>{child}</ScrollItem>
        ))
      : children}
  </ScrollContainer>
);
