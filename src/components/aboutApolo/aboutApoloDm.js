  export const fetchAboutText = async () => {
    try {
      const response = await fetch('/_locals.json');
      const data = await response.json();
      return {
        title: data.aboutApoloTitle,
        body: data.aboutBody,
      };
    } catch (error) {
      console.error("Error loading about text:", error);
      return {
        title: "Error",
        body: "Could not load content",
      };
    }
  };
  