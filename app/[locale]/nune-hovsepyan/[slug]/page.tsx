import { notFound } from "next/navigation";
import Image from "next/image";

import Header from "@/components/Header/Header";

import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";

import {
  caseStudies,
  getCaseStudy,
} from "@/components/SelectedWork/CaseStudiesData";

import styles from "./case.module.css";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.flatMap((item) => [
    {
      locale: "en",
      slug: item.slug,
    },
    {
      locale: "hy",
      slug: item.slug,
    },
  ]);
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale as Locale} dict={dict} />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.category}>
              {project.category}
            </span>

            <h1>{project.title}</h1>

            <p className={styles.subtitle}>
              {project.subtitle}
            </p>
            
          </div>
        </section>

        {project.showcaseItems &&
        project.showcaseItems.length > 0 ? (
          /* BRAND IDENTITY SHOWCASE */
          <section className={styles.brandShowcase}>
            <div className={styles.brandIntro}>
              <span>Selected Brand Identity Work</span>

              <p>{project.intro}</p>
            </div>

            <div className={styles.brandProjects}>
              {project.showcaseItems.map(
                (item, index) => (
                  <article
                    key={item.title}
                    className={styles.brandProject}
                  >
                    <div
                      className={
                        styles.brandProjectImage
                      }
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} — ${item.category}`}
                        fill
                        className={styles.brandImage}
                        sizes="(max-width: 900px) 100vw, 60vw"
                      />
                    </div>

                    <div
                      className={
                        styles.brandProjectContent
                      }
                    >
                     
                      <span
                        className={
                          styles.brandProjectCategory
                        }
                      >
                        {item.category}
                      </span>

                      <h2>{item.title}</h2>

                      <p>{item.text}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>
        ) : (
          <>
            
            {/* OVERVIEW */}
            <details className={styles.contentSection} open>
              <summary className={styles.sectionTitleRow}>
                <h2>Overview</h2>
                <span
                  className={styles.sectionMark}
                  aria-hidden="true"
                />
              </summary>

              <p className={styles.sectionText}>
                {project.intro}
              </p>
            </details>

            {/* ROLE */}
            <details className={styles.contentSection} open>
              <summary className={styles.sectionTitleRow}>
                <h2>Role & Team</h2>
                <span
                  className={styles.sectionMark}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.textStack}>
                {project.role.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>

            {/* CHALLENGE */}
            <details className={styles.contentSection} open>
              <summary className={styles.sectionTitleRow}>
                <h2>Campaign Challenge</h2>
                <span
                  className={styles.sectionMark}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.textStack}>
                {project.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>

            {/* STRATEGIC APPROACH */}
            <details className={styles.contentSection} open>
              <summary className={styles.sectionTitleRow}>
                <h2>Strategic Approach</h2>
                <span
                  className={styles.sectionMark}
                  aria-hidden="true"
                />
              </summary>

              {project.approachIntro && (
                <p className={styles.approachIntro}>
                  {project.approachIntro}
                </p>
              )}

              <div className={styles.approachList}>
                {project.approach.map((item) => (
                  <div
                    className={styles.approachRow}
                    key={item.number}
                  >
                    <div className={styles.approachNumber}>
                      {item.number}
                    </div>

                    <div className={styles.approachBody}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>

                      {item.selectedWork &&
                        item.selectedWork.length > 0 && (
                          <div className={styles.approachLinks}>
                            {item.selectedWork.map((work) => (
                              <a
                                key={work.url}
                                href={work.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.approachLink}
                              >
                                <span>{work.label}</span>
                                <span>↗</span>
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </details>

            {/* IMPACT */}
            <details className={styles.contentSection} open>
              <summary className={styles.sectionTitleRow}>
                <h2>Impact</h2>
                <span
                  className={styles.sectionMark}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.textStack}>
                {project.impact.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>

            {/* RESULTS */}
            {project.metrics.length > 0 && (
              <details
                className={`${styles.contentSection} ${styles.resultsSection}`}
                open
              >
                <summary className={styles.sectionTitleRow}>
                  <h2>Campaign Results</h2>
                  <span
                    className={styles.sectionMark}
                    aria-hidden="true"
                  />
                </summary>

                <div className={styles.resultsGrid}>
                  {project.metrics.map((metric) => (
                    <div
                      className={styles.resultMetric}
                      key={metric.label}
                    >
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </details>
            )}

          </>
        )}
      </main>
    </>
  );
}