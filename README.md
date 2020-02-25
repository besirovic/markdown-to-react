# Markdown to React parser (with Picasso)

Very simple app to demonstrate parsing markdown to React with overriding html elements with React component provided by [Picasso](https://picasso.toptal.net/) library

This demo will replce following HTML tags with corresponding Picasso component:
- `a` tag to `Link` component
- `h1`, `h2` and `h3` to `Typography` component with `heading` variant
- `p` to `Typography` component with `body` variant
  
Also, it allows you to use and parse components from `Picasso` directly in markdown. Currently just `Typography` and `Link` components are covered and will be parsed.

## Demo

Visit [demo page](https://markdown-to-react.now.sh/) and try it on your own

Copy and past following text and press `Run` button

```md
# Heading 1
## Heading 2
### Heading 3

Paragraphy

[Markdown link](http://toptal.com)

<Typography variant='heading' color='blue'>Typography component with custom color</Typography>

<Link target='_blank' href='http://toptal.com'>Link component</Link>
```

Also there is posibility to fetch content dynamically from `.md` file. To test it click on `Load .md file` and you will see content loaded from `demo.md` file placed in project's `src` folder.