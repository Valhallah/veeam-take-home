// JavaScript for dynamic parallax effect
document.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((el) => {
      const speed = el.dataset.speed || 0.5; // Use data-speed attribute for custom speed
      const offset = window.scrollY * speed;
      el.style.backgroundPositionY = `${offset}px`;
    });
  });
  
  // SVG Injector
  /**
   * Injects an SVG into a specified container.
   * @param {string} containerSelector - The selector of the container where the SVG will be injected.
   * @param {string} svgPath - The path to the SVG file.
   */
  function injectSVG(containerSelector, svgPath) {
    const container = document.querySelector(containerSelector);
  
    if (!container) {
      console.error(`Container with selector "${containerSelector}" not found.`);
      return;
    }
  
    fetch(svgPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load SVG from ${svgPath}`);
        }
        return response.text();
      })
      .then((svgContent) => {
        container.innerHTML = svgContent;
      })
      .catch((error) => {
        console.error(`Error injecting SVG: ${error.message}`);
      });
  }
  
  // Inject the SVG on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    // injectSVG(".hero__number", "assets/images/7.svg");
  });
  
  // Background Animation
  // Throttle function to limit scroll event execution
  function throttle(callback, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  }
  
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Max scrollable height
  
    // Stop point for background reveal
    const stopPoint = maxScroll * 0.5; // Stops at 50% of scrollable height
  
    // Calculate new background position
    let position = Math.min(scrollTop / stopPoint, 1) * 100; // Clamp position to 100%
  
    // Apply the background position
    document.body.style.backgroundPositionY = `${position}%`;
  };
  
  // Attach throttled scroll event listener
  window.addEventListener('scroll', throttle(handleScroll, 16)); // 16ms for ~60fps
  
  
  
  // JavaScript to render steps dynamically with alternating layout
  document.addEventListener("DOMContentLoaded", () => {
    const stepsContainer = document.querySelector(".steps__grid");
  
    const stepsData = [
      {
        icon: "assets/images/1.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-1.svg",
        name: "Ana Applgate",
        position: "Chief Executive Officer",
        company: "Veeam Software", 
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/2.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-2.svg",
        name: "Shaun Le Noir",
        position: "Chief Strategist",
        company: "Azure",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/3.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-3.svg",
        name: "Alina McKey",
        position: "Marketing Director",
        company: "Cloud Native",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/4.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-4.svg",
        name: "Mike Tailor",
        position: "Social Media Manager",
        company: "Veeam Software",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/5.svg",
        heading: "Lorem ipsum dolor sit amet mi sodales in velit eu.",
        description: "Lorem ipsum dolor sit amet sollicitudin dignissim iaculis. Egestas et eu augue faucibus vulputate gravida maximus natoque felis. Ornare quis etiam tristique nisi lacus urna proin inceptos habitant in si. Ultrices feugiat penatibus per cubilia netus si purus neque magnis rhoncus. Ultrices feugiat.",
        numberLine: "assets/images/line-5.svg",
        name: "Mary Poppins",
        position: "Technical Writer",
        company: "Microsoft",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/6.svg",
        heading: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum.",
        numberLine: "assets/images/line-6.svg",
        name: "Calvin Klein",
        position: "Lead Cloud Manager",
        company: "American Software",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
      {
        icon: "assets/images/7.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum.",
        name: "Angela Soares",
        position: "Product Owner",
        company: "SaaS Ownership",
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. 
  Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, 
  sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. 
  Proin et leo ipsum. Proin tempor elit in placerat rhoncus.
  
  Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, 
  at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. 
  Etiam luctus dolor vel quam feugiat, in pulvinar eros ultrices. In sapien nulla, fermentum in imperdiet et, 
  laoreet vel nulla. Sed in tincidunt ligula. Nam convallis purus ut sagittis convallis. Praesent in risus commodo, 
  consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. 
  Donec feugiat, diam ut eleifend mattis, turpis elit auctor libero, varius fringilla enim est et nisi. 
  Vestibulum ultrices non arcu quis imperdiet. Proin faucibus, quam et feugiat lacinia, metus eros interdum massa, 
  quis finibus arcu tortor in est. Nullam suscipit volutpat fermentum. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas.
  
  Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. 
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet et mi at vestibulum. 
  Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. 
  Ut non diam eu tortor commodo semper. Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. 
  Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada.
  
  Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, 
  vitae volutpat elit. Nunc congue porta velit at blandit. Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. 
  Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus 
  et netus et malesuada fames ac turpis egestas. Sed sodales placerat erat, quis pulvinar dui congue ac. 
  Vivamus tristique risus libero, ut condimentum mauris maximus sed. Ut faucibus neque non dictum molestie. 
  Curabitur fringilla finibus finibus. Pellentesque sit amet erat ornare, consectetur lacus eget, pretium mi. 
  Morbi finibus blandit quam, eu bibendum lectus pretium quis. Quisque fringilla, odio vel dictum condimentum, 
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.`
  
      },
    ];
  
    // Create and append modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.hidden = true;
  
  modalOverlay.innerHTML = `
    <div class="modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
      <button class="modal__close" aria-label="Close dialog">&times;</button>
      <div class="modal__header" id="modal-title">
        <h2>
        Modal Title
        </h2>
      </div>
      <div class="modal__content">
        <p>Modal description will appear here.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modalOverlay);
  
  const modal = modalOverlay.querySelector(".modal");
  const modalClose = modal.querySelector(".modal__close");
  
  const showModal = (name, info) => {
    // Save the last focused element
    const activeElement = document.activeElement;
    if (activeElement && activeElement instanceof HTMLElement) {
      activeElement.setAttribute("data-last-focused", "true");
    }
  
    // Update modal content and display it
    modal.querySelector("#modal-title h2").textContent = name;
  
    // Ensure proper paragraph splitting
    const paragraphs = info
      .trim() // Remove any leading or trailing whitespace
      .split(/\n\s*\n/) // Split by one or more newlines with optional whitespace
      .map(paragraph => `<p>${paragraph.trim()}</p>`) // Wrap each paragraph
      .join("");
  
    const modalContent = modal.querySelector(".modal__content");
    modalContent.innerHTML = paragraphs;
  
    modalOverlay.hidden = false;
    modal.setAttribute("aria-hidden", "false");
  
    // Move focus to the close button inside the modal
    modal.querySelector(".modal__close").focus();
  };
  
  
  const closeModal = () => {
    if (modal.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  
    modalOverlay.hidden = true;
    modal.setAttribute("aria-hidden", "true");
  
    const lastFocusedElement = document.querySelector("[data-last-focused]");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement.removeAttribute("data-last-focused");
    }
  };
  
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
  });
  
  
    // Render steps dynamically
    stepsData.forEach((step, index) => {
      const stepItem = document.createElement("div");
      stepItem.classList.add("step");
      stepItem.classList.add(index % 2 === 0 ? "step--left" : "step--right");
      stepItem.setAttribute("role", "group");
      stepItem.setAttribute("aria-labelledby", `step-heading-${index}`);
      
      stepItem.innerHTML = `
       <div class="step__icon" aria-expanded="false">
      <div class="step__front">
        <svg xmlns="http://www.w3.org/2000/svg" class="gradient-border" viewBox="0 0 300 300" fill="none">
          <rect x="2" y="2" width="278" height="278" rx="10" ry="10" fill="none" stroke="url(#gradient-${index})" stroke-width="4"/>
          <defs>
            <linearGradient id="gradient-${index}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#00D15F"/>
              <stop offset="100%" stop-color="rgba(0, 209, 95, 0)"/>
            </linearGradient>
          </defs>
        </svg>
        <img src="${step.icon}" alt="${step.heading}" tabindex="0">
      </div>
      <div class="step__back" hidden>
        <svg xmlns="http://www.w3.org/2000/svg" class="gradient-border" viewBox="0 0 300 300" fill="none">
          <rect x="2" y="2" width="278" height="278" rx="10" ry="10" fill="none" stroke="url(#gradient-${index})" stroke-width="4"/>
          <defs>
            <linearGradient id="gradient-${index}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#00D15F"/>
              <stop offset="100%" stop-color="rgba(0, 209, 95, 0)"/>
            </linearGradient>
          </defs>
        </svg>
        <img src="assets/images/person-${index + 1}.png" alt="${step.name}" class="step__back-image">
        <div class="card__info-wrapper">
          <h5 class="step__modal-trigger" role="button" tabindex="0" aria-label="Learn more about ${step.name}">
            ${step.name}
          </h5>
          <p>${step.position}</p>
          <p>${step.company}</p>
        </div>
      </div>
    </div>
    <div class="step__content">
      <h3 id="step-heading-${index}" class="step__heading">${step.heading}</h3>
      <p class="step__description">${step.description}</p>
    </div>
      `;
  
      const stepIcon = stepItem.querySelector(".step__icon");
      const front = stepIcon.querySelector(".step__front");
      const back = stepIcon.querySelector(".step__back");
      const modalTrigger = stepItem.querySelector(".step__modal-trigger");
  
  
      // Flip
     // Make stepIcon focusable and accessible
  stepIcon.setAttribute("tabindex", "0"); // Allow keyboard navigation
  stepIcon.setAttribute("role", "button"); // Improve accessibility
  stepIcon.setAttribute("aria-expanded", "false"); // Initial state
  
  // Function to toggle card flipping
  const toggleCard = () => {
    const isExpanded = stepIcon.getAttribute("aria-expanded") === "true";
    stepIcon.setAttribute("aria-expanded", !isExpanded);
    front.hidden = isExpanded;
    back.hidden = !isExpanded;
  };
  
  // Flip card on mouse click
  stepIcon.addEventListener("click", toggleCard);
  
  // Flip card on keyboard Enter or Space key
  stepIcon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { // Check for Enter or Space key
      e.preventDefault(); // Prevent space key from scrolling the page
      toggleCard();
    }
  });
  
  
      modalTrigger.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent flip on modal trigger click
        showModal(step.name, step.info);
      });
  
      // Ensure modal opens when tabbed to and Enter/Space is pressed
  modalTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent scrolling
      showModal(step.name, step.info);
    }
  });
      
      stepsContainer.appendChild(stepItem);
  
      // Add step__line inside the step__icon container
      if (index < stepsData.length - 1) {
        const lineItem = document.createElement("div");
        lineItem.classList.add("step__line");
        lineItem.classList.add(`step__line-${index + 1}`);
    
        lineItem.innerHTML = `
          <div class="number-line__svg line-${index + 1}">
            <img src="${step.numberLine}" alt="Line for Step ${index + 1}">
          </div>
        `;
    
        // Append the line at the bottom of the step container
        stepItem.appendChild(lineItem);
      }

  stepsContainer.appendChild(stepItem);
});
  });