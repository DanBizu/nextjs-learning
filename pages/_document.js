/**
 * Refer to this link https://styled-components.com/docs/advanced#nextjs
 */
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Someone down the line uses this regeneratorRuntime,
 * and for some strange reason cannot find it, so I added it
 * here so if somehow it looks up the stack, it can be found here.
 * <!> Do Not Remove <!>
 */
import regeneratorRuntime from 'regenerator-runtime';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}