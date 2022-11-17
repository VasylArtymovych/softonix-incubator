# Section #10 - Performance optimization

### Goal
When we build software products our goal is not just to make them work, they should work as fast as possible providing amazing user experience. In this section we will cover all key parts of website page speed optimization as well as understanding of how to debug bottlenecks in performance.

### Tech plan
- Google Pagespeed Insights tool
- Describe key items of performance optimization checklist
- Bundle analyzer check

### Materials for the section
- **Read**: [Web vitals](https://web.dev/vitals/)
- **Practice**: [Google page speed insights](https://pagespeed.web.dev/)

### Video Material
Youtube link

### Section Playground
- Branch name: [`section-10-performance`](https://github.com/Softonix/softonix-incubator/tree/section-10-performance)
- Tag1: `#section-10-performance-start`
  - Analyze Softonix website using google page speed tool.
  - Images (Small size of each image, relevant pixel size, lazy loading via JS, lazy loading attribute, on mobile we should not download images that are hidden on mobile)
  - Fonts (Small amount, preload, inline in CSS)
  - CSS (Small amount, use PurgeCSS to remove unused CSS or Tailwind JIT).
  - Layout Shifts (Min-height CSS for blocks, override fonts).
  - Internal JS (TreeShaking, Lazy Loading, WhenInView components)
  - 3rd party JS (TreeShaking, Postpone if possible, use new PartyTown as experiment, remove language packages like in moment.js)
  - Vue Optimization (VirtualLists for rendering, Promise.all for API, Not make reactive variables for huge nested objects).
  - **Infrastructure optimization** (Implement gzip/brotli compression, caching of static assets)

- Tag2: `#section-10-performance-end`
  - Implemented required optimizations.
