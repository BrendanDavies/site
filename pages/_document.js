import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en" />
        <body
          style={{
            backgroundImage: 'url(./lorraine.jpg)',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
            // backgroundSize: 'cover'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
