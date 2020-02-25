# Markdown to React parser (with Picasso)

Very simple app to demonstrate parsing markdown to React with overriding html elements with React component provided by [Picasso](https://picasso.toptal.net/) library

This demo will replce following HTML tags with corresponding Picasso component:
- `a` tag to `Link` component
- `h1`, `h2` and `h3` to `Typography` component with `heading` variant
- `p` to `Typography` component with `body` variant
  
Also, it allows you to use and parse components from `Picasso` directly in markdown. Currently just `Typography` and `Link` components are covered and will be parsed.

## Demo

Visit [demo page](#) and try it on your own

```md
# Heading 1
## Heading 2
### Heading 3

Paragraphy

[Markdown link](http://toptal.com)

<Typography variant='heading' color='blue'>Typography component with custom color</Typography>

<Link target='_blank' href='http://toptal.com'>Link component</Link>
```