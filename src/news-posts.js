export const getPosts = () => {
  return [
    {
      title:
        "An Algorithm That Grants Freedom, or Takes It Away",
      slug:
        "tpredictive-algorithms-crime",
      detail: require(`./posts/predictive-algorithms-crime.md`)
        .default,
      date: "10 February 2020",
      category: "Tech"
    },
    {
      title:
        "The New Coronavirus Has Killed More People Than SARS Did",
      slug:
        "coronavirus-china",
      detail: require(`./posts/coronavirus-china.md`)
        .default,
      date: "8 February 2020",
      category: "World"
    },
    {
      title: "A Horse Has 5 Toes, and Then It Doesn’t",
      slug: "horses-toes-hooves",
      detail: require(`./posts/horses-toes-hooves.md`).default,
      date: "6 February 2020",
      category: "Science"
    }
  ];};
