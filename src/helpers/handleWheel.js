export const setupScrollHandlers = (refs) => {
  const handleWheel = (e) => {
    e.preventDefault();
    const scrollAmount = 30;
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.scrollTop += e.deltaY * scrollAmount;
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        container.scrollTop = window.scrollY;
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  window.addEventListener("wheel", handleWheel);
  refs.forEach((ref) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => {
    window.removeEventListener("wheel", handleWheel);
    refs.forEach((ref) => {
      if (ref.current) observer.unobserve(ref.current);
    });
  };
};
