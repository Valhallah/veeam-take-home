// JavaScript for dynamic parallax effect
document.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((el) => {
      const speed = el.dataset.speed || 0.5; // Use data-speed attribute for custom speed
      const offset = window.scrollY * speed;
      el.style.backgroundPositionY = ${offset}px;
    });
  });
  
  // JavaScript to render steps dynamically with alternating layout
  document.addEventListener("DOMContentLoaded", () => {
    const stepsContainer = document.querySelector(".steps__grid");
  
    const stepsData = [
      { icon: "assets/images/1.svg", 
        heading: "Lorem Ipsum", 
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-1.svg" 
      },
      { icon: "assets/images/2.svg", 
        heading: "Lorem Ipsum", 
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-2.svg"  
      },
      { icon: "assets/images/3.svg", 
        heading: "Lorem Ipsum", 
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-3.svg"  
      },
      { icon: "assets/images/4.svg", 
        heading: "Lorem Ipsum", 
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-4.svg" 
       },
      { icon: "assets/images/5.svg", 
        heading: "Lorem ipsum dolor sit amet mi sodales in velit eu.", 
        description: "Lorem ipsum dolor sit amet sollicitudin dignissim iaculis. Egestas et eu augue faucibus vulputate gravida maximus natoque felis. Ornare quis etiam tristique nisi lacus urna proin inceptos habitant in si. Ultrices feugiat penatibus per cubilia netus si purus neque magnis rhoncus. Ultrices feugiat.",
        numberLine: "assets/images/line-5.svg"
        
      },
      { icon: "assets/images/6.svg", 
        heading: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.", 
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum.",
        numberLine: "assets/images/line-6.svg"
        
       },
      { icon: "assets/images/7.svg", 
        heading: "Lorem Ipsum", 
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum."
      },
    ];
  
    stepsData.forEach((step, index) => {
      const stepItem = document.createElement("div");
      stepItem.classList.add("step");
      stepItem.classList.add(index % 2 === 0 ? "step--left" : "step--right");
    
      stepItem.innerHTML = 
        <div class="step__icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="gradient-border" viewBox="0 0 300 300" fill="none">
            <rect x="2" y="2" width="278" height="278" rx="10" ry="10"
              fill="none"
              stroke="url(#gradient-${index})"
              stroke-width="4"/>
            <defs>
              <linearGradient id="gradient-${index}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00D15F" />
                <stop offset="100%" stop-color="rgba(0, 209, 95, 0)" />
              </linearGradient>
            </defs>
          </svg>
          <img src="${step.icon}" alt="${step.heading}">
        </div>
        <div class="step__content">
          <h3 class="step__heading">${step.heading}</h3>
          <p class="step__description">${step.description}</p>
        </div>
      ;
    
      stepsContainer.appendChild(stepItem);
    
      // Add the line SVG after each step except the last one
      if (index < stepsData.length - 1) {
        const lineItem = document.createElement("div");
        lineItem.classList.add("step__line");
        lineItem.classList.add(step__line-${index + 1})
    
        lineItem.innerHTML = 
          <div class="number-line__svg line-${index + 1}">
            <img src="${step.numberLine}" alt="Line for Step ${index + 1}">
          </div>
        ;
    
        stepsContainer.appendChild(lineItem);
      }
    });
  });
  
  // line
  document.addEventListener("DOMContentLoaded", () => {
    const heroLine = document.querySelector(".hero__line");
    const firstBox = document.querySelector(".step--left .step__icon"); // First box
  
    const updateHeroLinePosition = () => {
      if (heroLine && firstBox) {
        const boxRect = firstBox.getBoundingClientRect();
        const containerRect = firstBox.offsetParent.getBoundingClientRect(); // Parent offset position
  
        // Adjust line position to align with the first box
        heroLine.style.top = ${boxRect.top - containerRect.top + boxRect.height / 2}px;
        heroLine.style.left = ${boxRect.left - containerRect.left + boxRect.width / 2}px;
      }
    };
  
    // Initial positioning
    updateHeroLinePosition();
  
    // Update position on resize or scroll
    window.addEventListener("resize", updateHeroLinePosition);
    window.addEventListener("scroll", updateHeroLinePosition);
  });
  
  
  
  
  // Steps line
  
  document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
  
    const drawLines = () => {
      svg.innerHTML = ""; // Clear existing lines
  
      steps.forEach((step, index) => {
        if (index < steps.length - 1) {
          const currentStepIcon = step.querySelector(".step__icon").getBoundingClientRect();
          const nextStepIcon = steps[index + 1].querySelector(".step__icon").getBoundingClientRect();
  
          // Calculate start and end points
          const startX = currentStepIcon.left + currentStepIcon.width / 2;
          const startY = currentStepIcon.bottom;
          const endX = nextStepIcon.left + nextStepIcon.width / 2;
          const endY = nextStepIcon.top;
  
          // Control points for smooth curve
          const controlX1 = startX;
          const controlY1 = (startY + endY) / 2;
          const controlX2 = endX;
          const controlY2 = (startY + endY) / 2;
  
          // Create path for line
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute(
            "d",
            M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}
          );
          path.setAttribute("class", "line");
          svg.appendChild(path);
        }
      });
    };
  
    window.addEventListener("resize", drawLines); // Recalculate lines on resize
    drawLines(); // Initial draw
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
      console.error(Container with selector "${containerSelector}" not found.);
      return;
    }
  
    fetch(svgPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(Failed to load SVG from ${svgPath});
        }
        return response.text();
      })
      .then((svgContent) => {
        container.innerHTML = svgContent;
      })
      .catch((error) => {
        console.error(Error injecting SVG: ${error.message});
      });
  }
  
  // Inject the SVG on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    // injectSVG(".hero__number", "assets/images/7.svg");
  });
  
  // Background Animartion
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
    document.body.style.backgroundPositionY = ${position}%;
  };
  
  // Attach throttled scroll event listener
  window.addEventListener('scroll', throttle(handleScroll, 16)); // 16ms for ~60fps
  
  
  const stepsData = [
      {
        icon: "assets/images/1.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-1.svg",
        name: "Ana Applgate",
        position: "Chief Executive Officer",
        company: "Veeam Software", 
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/2.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-2.svg",
        name: "Shaun Le Noir",
        position: "Chief Strategist",
        company: "Azure",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/3.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-3.svg",
        name: "Alina McKey",
        position: "Marketing Director",
        company: "Cloud Native",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/4.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        numberLine: "assets/images/line-4.svg",
        name: "Mike Tailor",
        position: "Social Media Manager",
        company: "Veeam Software",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/5.svg",
        heading: "Lorem ipsum dolor sit amet mi sodales in velit eu.",
        description: "Lorem ipsum dolor sit amet sollicitudin dignissim iaculis. Egestas et eu augue faucibus vulputate gravida maximus natoque felis. Ornare quis etiam tristique nisi lacus urna proin inceptos habitant in si. Ultrices feugiat penatibus per cubilia netus si purus neque magnis rhoncus. Ultrices feugiat.",
        numberLine: "assets/images/line-5.svg",
        name: "Mary Poppins",
        position: "Technical Writer",
        company: "Microsoft",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/6.svg",
        heading: "Lorem ipsum dolor sit amet proin maecenas. Lorem ipsum dolor sit amet proin maecenas.",
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum.",
        numberLine: "assets/images/line-6.svg",
        name: "Calvin Klein",
        position: "Lead Cloud Manager",
        company: "American Software",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
      {
        icon: "assets/images/7.svg",
        heading: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet metus consequat non ante. Taciti erat luctus nibh euismod litora hac congue adipiscing. Consectetuer fames sociosqu conubia pellentesque ridiculus interdum litora neque. Viverra tortor iaculis convallis consequat integer auctor condimentum.",
        name: "Angela Soares",
        position: "Product Owner",
        company: "SaaS Ownership",
        info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
  lacus tellus suscipit velit, eget vestibulum urna odio quis lorem.
  
      },
    ];