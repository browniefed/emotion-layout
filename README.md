Simple emotion based responsive system on top of `styled-system`.

Responsive props include

```
display,
flexWrap,
flexDirection,
alignItems,
justifyContent,
width,
minWidth,
maxWidth,
space,
fontSize,
color,
flex,
order,
```

### Row

Flex component that's `display: "flex"` and 100% width by default.

### Col

The Col is the `Row` component with 3 special props. It sets `flexBasis` and `maxWidth` to the width, and has a shrink option.

```
flexBasis={props.flexBasis || props.width}
maxWidth={props.maxWidth || props.width}
flex={props => (shrink ? "1 1 auto" : "1 0 auto")}
```
