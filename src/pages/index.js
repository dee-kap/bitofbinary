import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle">
          Hi! I'm Deepak. Welcome to my online home
        </p>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div className={styles.heroBanner}>
      <h3>Who am I?</h3>
      <p>
        I convert ideas into digital products using my skills as a software
        developer.
      </p>
      <p>
        This website is my <a href="/garden">Digital Garden</a> and{" "}
        <a href="/stream">Stream</a>
      </p>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Deepak's Digital Garden`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Intro />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
