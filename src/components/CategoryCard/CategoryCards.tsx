import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
// import CategoryCardData from "./CategoryCardData";
import { CategoryCardData } from "./CategoryCardData";
import otv from "../../assets/otv.jpg";
import "./CategoryCard.css";
import { array } from "prop-types";

type CategoryProps = {
  category: string;
  categoryImage: string;
};

export default function CategoryCard({
  category,
  categoryImage,
}: CategoryProps) {
  return (
    <div>
      <div className="category-card-container">
        <Card className="category-card">
          <CardActionArea>
            <CardMedia component="img" height="235" image={categoryImage} />
          </CardActionArea>
        </Card>
        <div className="category-card-details">
          <Typography
            variant="caption"
            color="#aaaaaa"
            style={{
              fontFamily: "Source Sans Pro",
              fontSize: "medium",
              color: "#e5e5e5",
            }}
          >
            {category}
          </Typography>
        </div>
      </div>
    </div>
  );
}
