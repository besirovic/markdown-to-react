import React, { useState, useRef } from 'react';
import Picasso, { Page, Grid, Container, Input, Typography, Button, Link, Helpbox } from '@toptal/picasso';
import Markdown from 'markdown-to-jsx';

const overrides = {
  h1: {
    component: Typography,
    props: {
      variant: 'heading',
      size: 'large'
    }
  },
  h2: {
    component: Typography,
    props: {
      variant: 'heading',
      size: 'medium'
    }
  },
  h3: {
    component: Typography,
    props: {
      variant: 'heading',
      size: 'small'
    }
  },
  p: {
    component: Typography,
    props: {
      variant: 'body',
      size: 'medium'
    }
  },
  a: {
    component: Link,
    props: {
      target: '_blank'
    }
  },
  Typography: {
    component: Typography
  },
  Link: {
    component: Link
  }
}

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [markdown, setMarkdown] = useState('')

  const handleClick = () => {
    if (inputRef.current) {
      setMarkdown(inputRef.current?.value)
    }
  }

  return (
  <Picasso>
    <Page>
      <Grid style={{ height: '100%' }}>
        <Grid.Item large={6}  style={{ height: '100%' }}>
          <Container flex={true} direction='column' padded='medium' style={{ height: '100%' }}>
            <Container flex={true} direction='row' justifyContent='space-between' alignItems='center' bottom='small'>
              <Typography variant='heading' size='large' color='blue'>Markdown to React with Picasso</Typography>
              <Button variant='primary-blue' size='medium' onClick={handleClick}>Run</Button>
            </Container>
            <Input multiline={true} type='textarea' rows={40} ref={inputRef} style={{ width: '100%'}} placeholder='Place your markdown here' />
          </Container>
        </Grid.Item>
        <Grid.Item large={6}>
          <Container padded='medium'>
            {markdown ? (
              <Markdown options={{ overrides }}>{markdown}</Markdown>
            ) : (
              <Helpbox variant='yellow' style={{ width: '100%' }}>
                <Container flex={true} justifyContent='center'>
                  <Typography variant='heading' size='large'>Content will appear here</Typography>
                </Container>
              </Helpbox>
            ) }
          </Container>
        </Grid.Item>
      </Grid>
    </Page>
  </Picasso>
)}

export default App;
