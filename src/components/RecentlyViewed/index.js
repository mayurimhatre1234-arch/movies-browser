import { useState, useEffect } from "react";
import { getRecentlyViewed } from "../../utils/recentlyViewed";
import { toMovieDetailsPage, toPeopleDetailsPage } from "../../utils/routes";
import { posterMobileSizeUrl, profileSmallSizeUrl } from "../../api/api";
import {
  Container,
  Heading,
  ScrollRow,
  Card,
  CardLink,
  CardImage,
  CardTitle,
} from "./styled";
import noPoster from "../../assets/noPoster.svg";

export const RecentlyViewed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getRecentlyViewed());
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <Container>
      <Heading>Recently Viewed</Heading>
      <ScrollRow>
        {items.map((item) => {
          const link =
            item.type === "movie"
              ? toMovieDetailsPage({ id: item.id })
              : toPeopleDetailsPage({ id: item.id });
          const imageUrl =
            item.type === "movie" ? posterMobileSizeUrl : profileSmallSizeUrl;

          return (
            <Card key={`${item.type}-${item.id}`}>
              <CardLink to={link}>
                <CardImage
                  src={item.image ? imageUrl + item.image : noPoster}
                  alt={item.title}
                />
                <CardTitle>{item.title}</CardTitle>
              </CardLink>
            </Card>
          );
        })}
      </ScrollRow>
    </Container>
  );
};
