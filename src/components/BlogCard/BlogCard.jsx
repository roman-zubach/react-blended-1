import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  Date,
  Tag,
  UserBox,
  UserInfo,
  UserName
} from "./BlogCard.styled";

import {formatDateToNow} from "../../helpers/formatDate";

export const BlogCard = ({ name, postedAt, poster, tag, title, description, avatar }) => {
  return <Card>
    <CardHeader>
      <CardPoster
        src={poster}
        alt={title}
      />
    </CardHeader>
    <CardBody>
      <Tag>{tag}</Tag>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </CardBody>
    <CardFooter>
      <UserBox>
        <Avatar src={avatar} alt={name} />
        <UserInfo>
          <UserName>{name}</UserName>
          <Date>{formatDateToNow(postedAt)}</Date>
        </UserInfo>
      </UserBox>
    </CardFooter>
  </Card>;
};
