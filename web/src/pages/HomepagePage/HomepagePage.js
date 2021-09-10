import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomepagePage = () => {
  return (
    <>
      <MetaTags
        title="Homepage"
        // description="Homepage description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HomepagePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomepagePage/HomepagePage.js</code>
      </p>
      <p>
        My default route is named <code>homepage</code>, link to me with `
        <Link to={routes.homepage()}>Homepage</Link>`
      </p>
    </>
  )
}

export default HomepagePage
