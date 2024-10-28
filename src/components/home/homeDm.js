export const handleNavigateToAbout = (navigate) => {
  navigate('/about-apolo');
};

export const fetchTextData = async () => {
  try {
    const response = await fetch('/_locals.json');
    if (!response.ok) throw new Error("Error fetching data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load text data:", error);
    return {};
  }
};