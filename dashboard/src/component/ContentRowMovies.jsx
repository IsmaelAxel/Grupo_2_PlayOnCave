import { ContentRowItem } from "./ContentRowItem";
import PropTypes from "prop-types";

export const ContentRowMovies = ({totalProducts,totalUsers,totalSections}) => {
 
  const items = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Products in db",
      icon: "fas fa-film",
      value: totalProducts,
      
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Plataformas",
      icon: "fas fa-award",
      value: totalSections,
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Users quantity",
      icon: "fas fa-user",
      value: totalUsers,
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
ContentRowMovies.propTypes = {
  totalProducts: PropTypes.number,
  totalUsers: PropTypes.number,
  totalSections: PropTypes.number
}