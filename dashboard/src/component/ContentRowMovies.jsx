import { ContentRowItem } from "./ContentRowItem";

export const ContentRowMovies = () => {
  const items = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Movies in data base",
      icon: "fas fa-film",
      value: 21,
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Total awards",
      icon: "fas fa-award",
      value: 79,
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Actors quantity",
      icon: "fas fa-user",
      value: 49,
    },
  ];
  return (
    <div className="row">
      {items.map(({id,title,value,color, icon}) => (
        <ContentRowItem key={id} title={title} value={value} color= {color} icon={icon} />
      ))}
    </div>
  );
};
