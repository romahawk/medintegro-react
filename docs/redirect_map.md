# Redirect Map — medintegro.com.ua (Legacy WP → New Next.js)

Use this file to define **301 redirects** from the old WordPress URLs to the new Next.js routes.

| Old URL (WordPress)                                      | New URL (Next.js)                   | Status | Notes                              |
|----------------------------------------------------------|-------------------------------------|--------|------------------------------------|
| https://www.medintegro.com.ua/                          | /                                   | 301    | Home                               |
| https://www.medintegro.com.ua/pro-nas/                  | /about                              | 301    | About page                         |
| https://www.medintegro.com.ua/kontakti/                 | /contact                            | 301    | Contact page                       |
| https://www.medintegro.com.ua/operaczijni-svitilniki-surgiris/ | /equipment/surgical-lights          | 301    | Equipment category                 |
| https://www.medintegro.com.ua/medichni-konsoli-surgiris/genius-e-brake/ | /equipment/pendants/genius-e-brake | 301    | Equipment detail (example mapping) |

> Add all remaining URLs from `urls.csv` and define their new paths.
> Final map will be implemented in `next.config.mjs` via `async redirects()`.
