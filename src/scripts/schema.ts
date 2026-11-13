// Structured data (Schema.org JSON-LD) als één @graph per pagina, met vaste @id's zodat
// de entiteiten naar elkaar verwijzen. Alleen bevestigde feiten: onbekende velden
// (adres, telefoon, KvK, btw, sameAs) blijven weg tot ze in src/content/site.ts staan.
// LocalBusiness komt er bewust niet in: KOBAMA werkt landelijk en het adres is nog onbekend.
import { copy } from "../content/copy";
import { site } from "../content/site";

type Json = Record<string, unknown>;

export interface Crumb { name: string; path: string }

export interface ArticleData {
  headline: string;
  description: string;
  authorName: string;
  authorUrl: string;
  datePublished: Date;
  /** Alleen een echte wijzigingsdatum, geen nep-versheid. */
  dateModified?: Date;
  /** Pad van het artikelbeeld (PNG). */
  imagePath: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  type: string;
  description: string;
  audience: string;
}

interface Options {
  base: string | URL;
  /** Pad van de pagina, bijvoorbeeld "/blog/". */
  path: string;
  title: string;
  description: string;
  isHome: boolean;
  breadcrumbs?: Crumb[];
  article?: ArticleData;
  /** Dienstpagina: eigen Service-entiteit met een vaste @id (pagina-URL + #service). */
  service?: ServiceData;
}

export function buildGraph(o: Options): Json {
  const abs = (p: string) => new URL(p, o.base).href;
  const home = abs("/");
  const pageUrl = abs(o.path);
  const orgId = `${home}#organization`;
  const siteId = `${home}#website`;
  const pageId = `${pageUrl}#webpage`;
  const crumbsId = `${pageUrl}#breadcrumb`;
  const articleId = `${pageUrl}#article`;

  const organization: Json = {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: home,
    description: copy.schema.organizationDescription,
    logo: { "@type": "ImageObject", url: abs("/images/logo-kobama.webp"), width: 480, height: 125 },
    email: site.email,
    ...(site.phone && { telephone: site.phone }),
    ...(site.sameAs.length && { sameAs: [...site.sameAs] }),
    areaServed: { "@type": "Country", name: "Nederland" },
    // De oprichters, met dezelfde LinkedIn-links als in de teamsectie.
    founder: copy.people.members.map((m) => ({ "@type": "Person", name: m.name, sameAs: m.linkedin })),
  };

  const website: Json = {
    "@type": "WebSite",
    "@id": siteId,
    name: site.name,
    url: home,
    inLanguage: "nl-NL",
    publisher: { "@id": orgId },
  };

  const crumbs = o.breadcrumbs && o.breadcrumbs.length >= 1
    ? [{ name: "Home", path: "/" }, ...o.breadcrumbs]
    : undefined;

  const webPage: Json = {
    "@type": "WebPage",
    "@id": pageId,
    url: pageUrl,
    name: o.title,
    description: o.description,
    inLanguage: "nl-NL",
    isPartOf: { "@id": siteId },
    ...(o.isHome && { about: { "@id": orgId } }),
    ...(crumbs && { breadcrumb: { "@id": crumbsId } }),
    ...(o.article && { mainEntity: { "@id": articleId } }),
  };

  const graph: Json[] = [organization, website, webPage];

  if (o.isHome) {
    graph.push({
      "@type": "Service",
      "@id": `${home}#websiteontwikkeling`,
      name: copy.schema.service.name,
      serviceType: copy.schema.service.type,
      description: copy.schema.service.description,
      url: home,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "Nederland" },
      audience: { "@type": "Audience", audienceType: copy.schema.service.audience },
    });
  }

  if (o.service) {
    const v = o.service;
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: v.name,
      serviceType: v.type,
      description: v.description,
      url: pageUrl,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "Nederland" },
      audience: { "@type": "Audience", audienceType: v.audience },
    });
    webPage.mainEntity = { "@id": `${pageUrl}#service` };
  }

  if (crumbs) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": crumbsId,
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    });
  }

  if (o.article) {
    const a = o.article;
    graph.push({
      "@type": "BlogPosting",
      "@id": articleId,
      headline: a.headline,
      description: a.description,
      inLanguage: "nl-NL",
      url: pageUrl,
      mainEntityOfPage: { "@id": pageId },
      datePublished: a.datePublished.toISOString(),
      ...(a.dateModified && { dateModified: a.dateModified.toISOString() }),
      image: abs(a.imagePath),
      author: { "@type": "Person", name: a.authorName, url: a.authorUrl },
      publisher: { "@id": orgId },
      isPartOf: { "@id": siteId },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Veilig voor in een script-tag: voorkomt dat "</script>" of "<!--" in een waarde de tag sluit. */
export function serializeJsonLd(data: Json): string {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/[\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16)}`);
}
