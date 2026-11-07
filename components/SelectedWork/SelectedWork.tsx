"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import {
  categories,
  projects,
  type Category,
} from "./SelectedWorkData";
import styles from "./PortfolioGrid.module.css";

export default function SelectedWork({
  locale,
}: {
  locale: Locale;
}) {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="selected-work"
      className={styles.selectedWork}
    >
      <div className={styles.sectionHeading}>
        <h2>Selected Work</h2>
        <div className={styles.headingLine} />
      </div>

      <div
        className={styles.filters}
        role="group"
        aria-label="Filter selected work"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() =>
                setActiveCategory(category)
              }
              className={
                isActive
                  ? styles.filterActive
                  : undefined
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className={styles.workGrid}>
        {filteredProjects.map((project) => (
          <Link
  key={project.id}
  href={
    project.id === "inclusive-education"
      ? "https://changetheworld.tilda.ws/"
      : project.id === "women-success-stories"
      ? "https://set-an-example.tilda.ws/"
      : `/${locale}/nune-hovsepyan/${project.id}`
  }
  target={
    project.id === "inclusive-education" ||
    project.id === "women-success-stories"
      ? "_blank"
      : undefined
  }
  rel={
    project.id === "inclusive-education" ||
    project.id === "women-success-stories"
      ? "noopener noreferrer"
      : undefined
  }
  className={styles.workCard}
>
            <div className={styles.cardImageWrap}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.cardImage}
                sizes="(max-width: 650px) 100vw,
                       (max-width: 1050px) 50vw,
                       33vw"
              />
            </div>

            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className={styles.cardSubtitle}>
                {project.subtitle}
              </p>

              {project.metrics &&
                project.metrics.length > 0 && (
                  <div className={styles.cardMetrics}>
                    {project.metrics.map(
                      (metric) => (
                        <div key={metric.label}>
                          <strong>
                            {metric.value}
                          </strong>
                          <span>
                            {metric.label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}

              <span className={styles.viewCase}>
  VIEW CASE →
</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}