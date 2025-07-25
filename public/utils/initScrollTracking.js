
import { initScrollTracking } from "public/utils/ScrollTracking.js";

document.addEventListener('DOMContentLoaded', () => {
  initScrollTracking();
});

document.addEventListener('astro:page-load', () => {
  initScrollTracking();
});
