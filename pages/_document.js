import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          style={{
            backgroundImage: `url(${require('../public/images/lorraine.jpg')})`,
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
