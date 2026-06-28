import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'GeoNectar Technologies'
const BASE_URL = 'https://geo-nectar.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`

/**
 * SEO component — sets per-page title, description, canonical, Open Graph, and Twitter Card tags.
 *
 * @param {string}  title         - Page-specific title (will be appended with " | GeoNectar Technologies")
 * @param {string}  description   - Meta description (155 chars max recommended)
 * @param {string}  canonical     - Canonical URL path (e.g. "/services/bim-services"), defaults to current URL
 * @param {string}  ogImage       - Absolute URL to Open Graph image
 * @param {string}  ogType        - OG type: "website" (default) | "article"
 * @param {object}  article       - For blog posts: { publishedTime, modifiedTime, author, tags }
 * @param {boolean} noIndex       - If true, adds noindex directive (for legal/utility pages)
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  article,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Expert CAD Drafting & Design Outsourcing`
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific */}
      {ogType === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {ogType === 'article' && article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {ogType === 'article' && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
    </Helmet>
  )
}
