"use client";

import { useEffect } from "react";

export function SiteScripts() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    let lastScroll = 0;

    const onNavScroll = () => {
      if (!nav) return;
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 40);
      if (y > 200 && y > lastScroll + 8) nav.classList.add("nav-hidden");
      else if (y < lastScroll - 8 || y < 100) nav.classList.remove("nav-hidden");
      lastScroll = y;
    };

    window.addEventListener("scroll", onNavScroll, { passive: true });

    const navToggle = document.querySelector(".nav-toggle");
    const navMobile = document.querySelector(".nav-mobile");
    const onToggle = () => navMobile?.classList.toggle("open");
    navToggle?.addEventListener("click", onToggle);
    document.querySelectorAll(".nav-mobile a").forEach((link) => {
      link.addEventListener("click", () => navMobile?.classList.remove("open"));
    });

    const markVisible = (el: Element) => el.classList.add("visible");

    const revealIfInView = (selector: string) => {
      document.querySelectorAll(selector).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) markVisible(el);
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" },
    );

    document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 5) * 70}ms`;
      revealObserver.observe(el);
    });
    revealIfInView(".fade-in, .fade-in-left, .fade-in-right");

    const industryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            industryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 80px 0px" },
    );

    document.querySelectorAll(".industry-card").forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 100}ms`;
      industryObserver.observe(card);
    });
    revealIfInView(".industry-card");

    const safetyTimer = window.setTimeout(() => {
      document
        .querySelectorAll(
          ".fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible), .industry-card:not(.visible)",
        )
        .forEach(markVisible);
    }, 2200);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroContent = document.getElementById("heroContent");
    const heroMedia = document.getElementById("heroMedia");
    const filmLtr = document.getElementById("filmLtr");
    const filmRtl = document.getElementById("filmRtl");
    const industryScroll = document.getElementById("industryScroll");

    const onScrollMotion = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const heroProgress = Math.min(y / vh, 1);

      if (!reducedMotion && heroContent && heroMedia) {
        heroContent.style.opacity = String(1 - heroProgress * 0.85);
        heroContent.style.transform = `translateY(${heroProgress * 48}px)`;
        heroMedia.style.transform = `translateY(${heroProgress * 24}px) scale(${1 - heroProgress * 0.06})`;
      }

      if (filmLtr && filmRtl && !reducedMotion) {
        const speed = 1 + heroProgress * 2.5;
        filmLtr.style.animationDuration = `${40 / speed}s`;
        filmRtl.style.animationDuration = `${45 / speed}s`;
      }

      document.querySelectorAll("[data-scroll-card]").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = vh / 2;
        const dist = (center - viewCenter) / vh;
        const img = card.querySelector(".industry-img img") as HTMLElement | null;
        if (img && Math.abs(dist) < 0.8) {
          const shift = dist * -35;
          const scale = 1.08 + (1 - Math.abs(dist)) * 0.06;
          img.style.transform = `translateY(${shift}px) scale(${scale})`;
        }
      });

      if (industryScroll && !reducedMotion) {
        const indSection = document.getElementById("industries");
        if (indSection) {
          const rect = indSection.getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) {
            const progress = 1 - rect.top / vh;
            industryScroll.scrollLeft = progress * 120;
          }
        }
      }
    };

    window.addEventListener("scroll", onScrollMotion, { passive: true });
    onScrollMotion();

    const heroVideoWrap = document.getElementById("heroVideoWrap");
    const heroVideo = document.getElementById("heroVideo") as HTMLVideoElement | null;
    let videoObserver: IntersectionObserver | undefined;

    if (heroVideo && heroVideoWrap) {
      const showVideoFallback = () => heroVideoWrap.classList.add("video-failed");
      const onVideoPlaying = () => heroVideoWrap.classList.add("video-playing");
      heroVideo.addEventListener("error", showVideoFallback);
      heroVideo.addEventListener("playing", onVideoPlaying);
      if (!heroVideo.paused && heroVideo.readyState >= 2) onVideoPlaying();
      const videoTimer = window.setTimeout(() => {
        if (heroVideo.readyState < 2) showVideoFallback();
      }, 4000);

      videoObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !heroVideoWrap.classList.contains("video-failed")) {
          heroVideo.play().then(onVideoPlaying).catch(showVideoFallback);
        } else {
          heroVideo.pause();
        }
      }, { threshold: 0.25 });
      videoObserver.observe(heroVideo);

      const heroLoadTimer = window.setTimeout(() => document.body.classList.remove("hero-load"), 1200);

      return () => {
        window.removeEventListener("scroll", onNavScroll);
        window.removeEventListener("scroll", onScrollMotion);
        navToggle?.removeEventListener("click", onToggle);
        revealObserver.disconnect();
        industryObserver.disconnect();
        videoObserver?.disconnect();
        window.clearTimeout(safetyTimer);
        window.clearTimeout(videoTimer);
        window.clearTimeout(heroLoadTimer);
      };
    }

    const heroLoadTimer = window.setTimeout(() => document.body.classList.remove("hero-load"), 1200);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
      window.removeEventListener("scroll", onScrollMotion);
      navToggle?.removeEventListener("click", onToggle);
      revealObserver.disconnect();
      industryObserver.disconnect();
      window.clearTimeout(safetyTimer);
      window.clearTimeout(heroLoadTimer);
    };
  }, []);

  return null;
}
