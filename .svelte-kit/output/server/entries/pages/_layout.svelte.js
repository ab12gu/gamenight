import { x as head, y as attr } from "../../chunks/index.js";
const favicon = "/_app/immutable/assets/triangle.B9-gc9Mi.png";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head($$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  $$renderer.push(`<nav><a href="/">Home</a> <a href="/details">Details</a> <a href="/rant">Rant</a> <a href="/subscribe">Subscribe</a> <a href="/donations">Donations</a></nav> `);
  children?.($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
