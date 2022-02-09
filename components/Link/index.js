export default function Link({ children, type = "link", ...rest }) {
  return <a {...rest}>{children}</a>;
}
