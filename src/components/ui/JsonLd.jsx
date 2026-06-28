import { Helmet } from 'react-helmet-async'

/**
 * Injects a JSON-LD <script> tag into the document head.
 * Pass any valid schema.org object as `schema`.
 */
export default function JsonLd({ schema }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
